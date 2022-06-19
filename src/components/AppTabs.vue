<template>

    <ul class="flex">
        <li v-for="(tab,index) in tabs"
            :key="index">
            <button
                :class="{
                'bg-blue-500' : selectedTitle === tab.props.title,
                'bg-gray-500' : selectedTitle !== tab.props.title
              }"
                class="py-2 px-4 text-white"
                @click.prevent="selectTab(tab.props.title)"
            >
                {{ tab.props.title }}
            </button>
        </li>
    </ul>
    <slot></slot>
</template>

<script setup>

import {onMounted, provide, ref, useSlots, watch} from 'vue'
import {useTabsStore} from "@/store/tabs";

const props = defineProps({
    id: {
        required:true,
        type:String
    }
})

provide('tab-id',props.id)
const selectedTitle = ref();
const tabs = ref();
const slots = useSlots();
const tabsStore = useTabsStore();

onMounted(() => {
    tabsStore.select({
        id:props.id,
        title:iniTab()
    })
    tabs.value = slots.default()
})

watch( () => tabsStore.selected, () => {
    selectedTitle.value = tabsStore.tab(props.id)
},{ deep: true })

function iniTab(){
    let defaultActive = slots.default().filter(tab => tab.props.active)
    if(defaultActive.length > 0){
       return defaultActive[0].props.title
    }
    return slots.default()[0].props.title;
}

function selectTab(title){
    tabsStore.select({
        id:props.id,
        title
    })
}


</script>
