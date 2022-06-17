<template>
    <div class="max-w-6xl mx-auto my-10 space-y-4">
      <h1 class="text-2xl font-bold ">Tabs</h1>
      <ul class="flex">
        <li v-for="(tab,index) in tabs"
            :key="index">
          <button
              :class="{
                'bg-blue-500' : selectedTitle === tab.props.title,
                'bg-gray-500' : selectedTitle !== tab.props.title
              }"
              class="py-2 px-4 text-white"
              @click.prevent="selectedTitle = tab.props.title"
          >
            {{tab.props.title}}
          </button>
        </li>
      </ul>
      <slot ></slot>
    </div>
</template>

<script setup>

import { provide } from 'vue'
import { useSlots } from 'vue'
import {ref,onMounted} from "vue";

const selectedTitle = ref();
const tabs = ref();

provide('selectedTab', selectedTitle)

onMounted( () => {
  tabs.value = useSlots().default()
  selectedTitle.value = useSlots().default()[0].props.title
})

</script>
