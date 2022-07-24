<template>

    <ComponentLayout title="Graph using animation" class="my-8">

        <div class="space-x-8 flex mx-auto max-w-max" >
            <div
                v-for="(stat,index) in stats"
                :class="stat.bgClass"
                class="w-16 rounded shadow-lg text-white text-center"
                :style="`height: ${stat.tweenedNumber}em`"
            >
                {{stat.tweenedNumber.toFixed(0)}}
            </div>
        </div>
    </ComponentLayout>
</template>

<script setup>
import ComponentLayout from "@/components/ComponentLayout.vue";
import gsap from 'gsap';
import {ref, watch} from "vue";

const minHeight = 10;
const maxHeight = 33;
const stats = ref([
    {
        bgClass:'bg-sky-400',
        height: 33,
        tweenedNumber:0,
    },
    {
        bgClass:'bg-green-400',
        height: 20,
        tweenedNumber:0,
    },
    {
        bgClass:'bg-red-400',
        height: 25,
        tweenedNumber:0,

    },
    {
        bgClass:'bg-pink-400',
        height: 33,
        tweenedNumber:0,
    },
    {
        bgClass:'bg-purple-400',
        height: 31,
        tweenedNumber:0,
    },
    {
        bgClass:'bg-indigo-400',
        height: 31,
        tweenedNumber:0,
    },
])

setInterval( () => {
    stats.value.forEach( (stat) => {
        let diff = maxHeight - minHeight;
        let number =  Math.floor(Math.random() * diff);
        number = number + minHeight
        stat.height = number
    })
},1500)

watch(stats, (newValue) => {
    newValue.forEach( (stat) => {
        gsap.to(stat, {
            duration: 1,
            ease: 'circ.out',
            tweenedNumber: stat.height
        })
    })
},{ deep:true})

</script>