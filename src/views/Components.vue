<template>

    <section style="display: grid;place-items: center;height: 70vh;width:100%">
        <ul class="space-y-1">
            <li v-for="component in components" :key="component.description">
                <a class="text-blue-500" :href="component.url">{{ component.description }}</a>
            </li>
        </ul>
    </section>
</template>

<script setup>
import {ref} from "vue";

const components = ref([
    {description: 'Fix To Top', name: {name: 'fix.to.top'}, url: '/fix-to-top'},
    {description: 'When Visible', name: {name: 'when.visible'}, url: '/when-visible'},
    {description: 'Tabs', name: {name: 'tabs'}, url: '/tabs'},
    {description: 'Data Table', name: {name: 'order.index'}, url: '/order'},
    {description: 'Drop Down', name: {name: 'drop.down'}, url: '/drop-down'},
    {description:'Paginator',url:'/pagination'},
    {description:'Counter',url:'/count-up'},
    {description:'Flex Box Grid',url:'/flex-grid'},
    {description:'Css Grid Layout',url:'/css-grid'},
    // {description:'Modal',url:'/modal'}
])
</script>