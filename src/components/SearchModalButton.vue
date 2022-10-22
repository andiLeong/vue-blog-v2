<template>
    <button
        @click.prevent="openSearchModal"
        id="search-button"
        class="js-search-button flex items-center space-x-2 text-gray-400 px-2"
    >
        <svg
            class="h-5 w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
            />
        </svg>
        search
    </button>
</template>

<script setup>
import SearchModal from '@/model/SearchModal';

const searchModal = new SearchModal();

function openSearchModal() {
    console.log('opening from nav bar');
    searchModal.opens();
}
</script>
