<template>

    <vue-final-modal v-model="show" @opened="opened">

        <div class="flex items-start justify-center min-h-screen p-4 text-center sm:p-0">
            <div
                v-click-away="onClickAway"
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
                            <input @input="search" v-model="key" ref="searchInput" type="text"
                                   class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                                   placeholder="Search...">
                        </div>
                    </form>
                </div>
                <div class="mt-5 sm:mt-6 flex-1">
                    <AppPalettesModalItems :posts="showPosts" :loading="loading" :activeIndex="activeIndex" />
                </div>

                <div class="mt-6">
                    <AppPalettesModalFooter />
                </div>
            </div>
        </div>

    </vue-final-modal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'
import {useSearchModalStore} from '@/store/searchModal'
import {computed, onMounted, ref, watch} from "vue";
import SearchModal from "@/model/SearchModal";
import _ from "lodash";
import KeyDown from "@/model/KeyDown";
import SearchItemIndex from "@/model/SearchItemIndex";
import AppPalettesModalFooter from "@/components/AppPalettesModalFooter.vue";
import AppPalettesModalItems from "@/components/AppPalettesModalItems.vue";

const searchModal = new SearchModal()
const searchItemIndex = new SearchItemIndex();
const keyDown = new KeyDown();

const activeIndex = searchItemIndex.currentIndex
const postQuantity = 4;
const show = ref(searchModal.open)
const key = ref(null)
const searchInput = ref(null)
const loading = ref(false)
const posts = ref([])

const showPosts = computed( () => {
    return posts.value.slice(0,postQuantity)
})

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

    keyDown
        .onEsc( () => close())
        .onArrowDown( () => searchItemIndex.next())
        .onArrowUp( () => searchItemIndex.previous())
        .onForwardSlash( () => searchModal.opens())
        .onEnter( () => {
            let slug = showPosts.value[activeIndex.value]?.slug
            if(slug){
                window.location.assign(`/posts/${slug}`)
            }
        })
        .fire()

})

function close() {
    searchModal.close()
    key.value = null
    posts.value = []
    searchItemIndex.clear()
}

const search = _.debounce(e => {
    let query = key.value;
    posts.value = [];
    if (query) {
        loading.value = true;
        axios
            .get(`/api/posts/search?key=${query}`)
            .then(({data}) => {
                posts.value = data;
                loading.value = false;
            })
            .catch(error => console.log(error));
    }

}, 500)

function goToSearch(){

    console.log('goging to search page')
}

function opened(){
    searchInput.value.focus()
}

</script>

<style scoped>

</style>