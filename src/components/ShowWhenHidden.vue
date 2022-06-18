<template>
    <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div v-if="show">
            <slot />
        </div>
    </transition>
</template>

<script setup>
import {ref,onMounted} from "vue";

const props = defineProps(['element'])
const show = ref(false)

onMounted( () => {

    let observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting === false){
           show.value = true
        }else{
            show.value = false
        }
        // console.log(entries)
    })

    observer.observe(
        document.querySelector(props.element)
    )

})

</script>