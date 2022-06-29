<template>


    <div class="mb-10 mt-20 max-w-xl lg:mx-auto mx-4 space-y-5">
        <input @input="search" type="text" v-model="query" class="form-input" placeholder="Starts Your Search">
        <ul v-if="results" class="space-y-4">
<!--            <li class="dark:bg-gray-50 dark:text-gray-500 text-gray-700 px-3 py-2 rounded "><a href="">hello</a> </li>-->
<!--            <li class="dark:bg-gray-50 dark:text-gray-500 text-gray-700 px-3 py-2 rounded "><a href="">hello</a> </li>-->
<!--            <li class="dark:bg-gray-50 dark:text-gray-500 text-gray-700 px-3 py-2 rounded "><a href="">hello</a> </li>-->
<!--            <li class="dark:bg-gray-50 dark:text-gray-500 text-gray-700 px-3 py-2 rounded "><a href="">hello</a> </li>-->
<!--            <li class="dark:bg-gray-50 dark:text-gray-500 text-gray-700 px-3 py-2 rounded "><a href="">hello</a> </li>-->
            <li
                v-for="(result,index) in results"
                :key="index"
            >
                <a class="block" v-html="result.title" :href="`/post/${result.slug}`"></a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from "vue";
import _ from "lodash";

const query = ref(null);
const results = ref([]);


const search = _.debounce(e => {

    results.value = [];
    let key = query.value;
    if(!key){
        return;
    }
    axios
        .get(`/api/posts/search?key=${key}`)
        .then(({data}) => {
            results.value = data.map( (post) => {

                if(post.title.includes(key)){
                   post.title =  post.title.replace(key, `<span class="bg-sky-500 text-white ">$&</span>`) ;
                }
                return post;
            });
        })
        .catch(error => console.log(error) );

}, 400)



search();


</script>

