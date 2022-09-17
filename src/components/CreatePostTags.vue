<template>
    <InputGroupLayout space="space-y-1" label="Tags" description="Press @ to auto complete a tag">
        <div>
            <input id="Tags" type="text" class="form-input" v-model="tag" @input="tagging" placeholder="Typing your tags"/>
            <div class="flex items-center mt-3">
                <div
                    class="flex items-center mr-2 px-2 py-1 border border-gray-300 bg-white text-gray-700 rounded-md shadow"
                    v-for="(tag,index) in tags"
                    :key="index"
                >
                    <p class="text-sm mr-3" v-html="tag"></p>
                    <button @click.prevent="remove(index)" class="text-red-500 text-xs">x</button>
                </div>
            </div>
        </div>
    </InputGroupLayout>
</template>

<script setup>
import {ref} from "vue";
import InputGroupLayout from "@/components/forms/InputGroupLayout.vue";

const emits = defineEmits(['addTag'])
const tags = ref([]);
const tag = ref(null);


function tagging(e) {
    if (e.data !== '@') {
        return;
    }

    let savedTag = tag.value.replace('@', '').trim()
    if (!tags.value.includes(savedTag) && savedTag !== '') {
        tags.value.push(savedTag)
    }
    tag.value = null
    emits('updateTag', tags.value)
}

function remove(index) {
    tags.value = tags.value.filter((tag, tagIndex) => tagIndex !== index);
    emits('updateTag', tags.value)
}

</script>