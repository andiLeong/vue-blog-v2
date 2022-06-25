<template>

    <vue-final-modal v-model="show" :focus-trap="true">

        <div  class="flex items-start justify-center min-h-screen p-4 text-center sm:p-0">

            <div v-click-away="onClickAway" class="palettes relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <div>

                    <div class="relative">
                        <svg class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                        <input ref="search" autofocus type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." >
                    </div>


                </div>
                <div class="mt-5 sm:mt-6">
<!--                    <button @click.prevent="search.focus()">focus</button>-->
                    <!--                        <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">Go back to dashboard</button>-->
                </div>
            </div>
        </div>

    </vue-final-modal>
</template>

<script setup>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import {useSearchModalStore} from '@/store/SearchModal'
import {ref, watch} from "vue";
import SearchModal from "@/model/SearchModal";


const searchModal = new SearchModal()
const show = ref(searchModal.open)
// const search = ref(null)

function onClickAway(e){

    let classes = e.target.classList;
    if(classes[0] === 'js-search-button' || classes[0] === 'h-5'){
        return;
    }

    searchModal.close()
}

watch( () => useSearchModalStore().show , (newValue) => {

  show.value = newValue

})


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        searchModal.close()
    }
};
</script>

<style scoped>

</style>