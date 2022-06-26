<template>

    <vue-final-modal v-model="show" :focus-trap="true">

        <div class="flex items-start justify-center min-h-screen p-4 text-center sm:p-0">

            <div v-click-away="onClickAway"
                 class="palettes flex flex-col relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <div>
                    <form @submit.prevent="goToSearch">

                    <div class="relative">
                        <svg class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <input @input="search" v-model="key" autofocus type="text"
                               class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                               placeholder="Search...">
                    </div>

                    </form>
                </div>
                <div class="mt-5 sm:mt-6 flex-1">
                    <ul v-if="posts" class="space-y-2" id="search-result-ul">
                        <li
                            v-for="(post,index) in showPosts"
                            :key="post.id"
                            class="px-2 py-1 rounded-md transition"
                            :class="index === activeIndex ? 'text-gray-700 bg-gray-200': 'text-gray-600'"
                        >
                            <a :href="path(post.slug)" class="block">{{ post.title }}</a>
                        </li>
                    </ul>
                    <div v-if="loading" class="flex justify-center">
                        <Spinner class="animate-spin h-6 w-6 text-sky-600"/>
                    </div>
                </div>

                <div class="mt-6">
                    <div class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">
                        Type <kbd class="font-semibold text-gray-900 mx-2">esc</kbd>
                        <span class="sm:hidden">close,</span>
                        <span class="hidden sm:inline">to close, hit</span>
                        <kbd class="font-semibold text-gray-900 mx-2">enter</kbd>
                        to post page, navigate with
                        <kbd class="font-semibold text-gray-900 mx-2">arrow key</kbd>
                    </div>
                </div>
            </div>
        </div>

    </vue-final-modal>
</template>

<script setup>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import {useSearchModalStore} from '@/store/searchModal'
import {computed, onMounted, ref, watch} from "vue";
import SearchModal from "@/model/SearchModal";
import _ from "lodash";
import Spinner from '@/components/Spinner.vue';
import KeyDown from "@/model/KeyDown";
import SearchItemIndex from "@/model/SearchItemIndex";



const postQuantity = 4;

const searchModal = new SearchModal()
const show = ref(searchModal.open)
const key = ref(null)
// const activeIndex = ref(null)
const loading = ref(false)
const posts = ref([
    // {id:1,title:'title',slug:'slug1'},
    // {id:2,title:'title',slug:'slug2'},
    // {id:3,title:'title',slug:'slug3'},
    // {id:4,title:'title',slug:'slug4'},
])

// const lastIndex = postQuantity - 1;

const showPosts = computed( () => {
    return posts.value.slice(0,postQuantity)
})

let searchItemIndex = new SearchItemIndex();
const activeIndex = searchItemIndex.currentIndex

function path(slug){
    return `/posts/${slug}`
}
function onClickAway(e) {

    let classes = e.target.classList;
    if (classes[0] === 'js-search-button' || classes[0] === 'h-5') {
        return;
    }
    if(show.value){
        close()
    }
}

watch(() => useSearchModalStore().show, newValue => show.value = newValue)
watch(() => showPosts.value, newValue => searchItemIndex.setItems(newValue))

onMounted( () => {

    //todo check  and we have showposts to show
    // if(show.value){

    (new KeyDown())
        .onEsc( () => close())
        // .when()
        .onArrowDown( () => {
            searchItemIndex.next()
        })
        .onArrowUp( () => {
            searchItemIndex.previous()
        })
        .onEnter( () => {
            let slug = showPosts.value[activeIndex.value]?.slug
            if(slug){
                window.location.assign(path(slug))
            }
        })
        .fire()

    // }
    // document.addEventListener("keydown", (e) => {


        // if (e.key === 'Escape' && e.keyCode === 27 && show.value) {
        //     close()
        // }


        // if (e.key === 'ArrowDown' && e.keyCode === 40 && show.value) {
        //     if (activeIndex.value !== null) {
        //         if (activeIndex.value === lastIndex) {
        //             return activeIndex.value = 0
        //         }
        //
        //         return activeIndex.value++;
        //     }
        //
        //     activeIndex.value = 0
        // }
        //
        // if (e.key === 'ArrowUp' && e.keyCode === 38 && show.value) {
        //
        //     if (activeIndex.value) {
        //         if (activeIndex.value === 0) {
        //             return activeIndex.value = lastIndex
        //         }
        //         return activeIndex.value--;
        //     }
        //
        //     activeIndex.value = lastIndex
        // }


        // if (e.key === 'Enter' && e.keyCode === 13 && show.value) {
        //     let slug = showPosts.value[activeIndex.value]?.slug
        //     if(slug){
        //         window.location.assign(path(slug))
        //     }
        // }

    // })
})

function close() {
    searchModal.close()
    key.value = null
    posts.value = []
    searchItemIndex.clear()
}

const search = _.debounce(e => {

    // console.log('call ' + e.target.value)
    let query = key.value;
    loading.value = true;
    posts.value = [];
    if (query) {
        axios
            .get(`/api/posts/search?key=${query}`)
            .then(({data}) => {
                posts.value = data;
                loading.value = false;
            })
            .catch(error => console.log(error));
    }

    loading.value = false;
}, 500)

function goToSearch(){

    console.log('goging to search page')
}

</script>

<style scoped>

</style>