<template>
    <div v-if="title === selectedTab">
        <slot/>
    </div>
</template>

<script setup>
import {inject} from "vue";
const props = defineProps(['title'])
const selectedTab = inject('selectedTab')

</script>
