<template>
    <div class="flex items-center">
        <p @click.prevent="sortBy(column)" class="cursor-pointer">
            {{ column }}
        </p>

        <div class="pl-2" v-if="column === sortedColumn">
            <span v-if="sort.direction === 'asc'">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                    />
                </svg>
                <p class="sr-only">up</p>
            </span>
            <span v-if="sort.direction === 'desc'">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
                <p class="sr-only">down</p>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['column', 'sortedColumn']);
const emit = defineEmits(['sort', 'sortedColumn']);
const sort = ref({
    order_by: 'id',
    direction: 'desc',
});

function sortBy(key, direction = 'desc') {
    sort.value.order_by = key;
    sort.value.direction = sort.value.direction === 'asc' ? 'desc' : 'asc';

    let query = `order_by[]=${key}&direction[]=${sort.value.direction}`;

    emit('sort', query);
    emit('sortedColumn', key);
}
</script>
