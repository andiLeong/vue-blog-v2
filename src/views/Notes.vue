<template>

    <div v-if="isOffline" class="w-full absolute top-0 left-0 z-10 opacity-75 text-center py-2 bg-red-300 border-b border-red-500 text-red-700">
        Sorry, it looks like you're offline.
    </div>

    <div class="max-w-6xl md:mx-auto mx-4 md:grid grid-cols-3 gap-5 my-10 space-y-4 md:space-y-0">
        <div>
            <h1 class="text-gray-700">Notes</h1>

            <ul v-if="notes" class="space-y-4">
                <li v-for="note in notes">
                    <div class="text-base text-blue-500">{{new Date(note.created).toLocaleString()}}</div>
                    <div class="text-xs">{{note.content}}</div>
                </li>
            </ul>
        </div>
        <div class="col-span-2 ">
            <h2 class="text-gray-700">Create Notes</h2>
            <form @submit.prevent="save">
            <textarea v-model="content" cols="30" rows="10" placeholder="Write your note" class="w-full"></textarea>

            <div>
            <SubmitButton :loading="false" />
            </div>

            </form>
        </div>
    </div>

</template>

<script setup>
import SubmitButton from "@/components/forms/SubmitButton.vue"
import {ref, onMounted,onBeforeMount} from "vue";

const content = ref('');
const notes = ref([]);
const database = ref('');
const isOffline = ref(!navigator.onLine);



const getDatabase = async () => {
    return new Promise((resolve, reject) => {
        let db = window.indexedDB.open("notes", 3);
        db.onerror = e => {
            reject('Error opening the database.');
        };
        db.onsuccess = e => {
            console.log('db.onsuccess', e);
            resolve(e.target.result);
        };
        db.onupgradeneeded = e => {
            console.log('db.onupgradeneeded', e);
            if(e.target.result.name === 'notes'){
                // e.target.result.deleteObjectStore("notes");
            }
            // e.target.result.deleteObjectStore("notes");
            e.target.result.createObjectStore("notes", { keyPath: "created" });
        };
    });
}


const save = async () => {
    console.log(database.value)
    return new Promise((resolve, reject) => {
        let transaction = database.value.transaction('notes', 'readwrite');
        transaction.oncomplete = e => {
            resolve();
        }
        let created = new Date().getTime();
        let note = {
            content: content.value,
            created
        };
        content.value = ''
        notes.value.unshift(note)
        transaction.objectStore('notes').add(note);
    });
}

 const getNotes = async () => {
    return new Promise((resolve, reject) => {
        database.value.transaction('notes')
            .objectStore('notes')
            .getAll()
            .onsuccess = e => {
            // console.log('getNotes()', e.target.result);
            resolve(e.target.result);
        };
    });
}

onBeforeMount(  async () => {
    database.value =  await getDatabase()
    let myNotes = await getNotes();
    notes.value = myNotes.reverse();

  window.addEventListener('offline', () => {
    isOffline.value = true;
  });
  window.addEventListener('online', () => {
    isOffline.value = false;

  });
})


</script>
