<template>

    <div ref="element" :class="{ 'fixed top-0 w-full z-50 mt-0' : shouldApply}">
        <slot></slot>
    </div>
</template>

<script setup>


import {ref,onMounted} from "vue";
import {throttle} from "lodash";

const element = ref(null)
const shouldApply = ref(false)

onMounted( () => {

    let offsetTop = element.value.offsetTop;
    window.addEventListener('scroll', throttle( () => {

        if(window.scrollY >= offsetTop){
            shouldApply.value = true
        }else{
            shouldApply.value = false
        }
    },300))


})


</script>

<style scoped>

</style>