<template>
    <div
        class="bg-white px-4 py-3 flex items-center justify-between border rounded border-gray-200 sm:px-6"
    >
        <div class="flex-1 flex justify-between sm:hidden">
            <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
                Previous
            </a>
            <a
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
                Next
            </a>
        </div>
        <div
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        >
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">{{ pagination.from }}</span>
                    to
                    <span class="font-medium">{{ pagination.to }}</span>
                    of
                    <span class="font-medium"> {{ pagination.total }}</span>
                    results
                </p>
            </div>
            <div>
                <nav
                    class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    <button
                        :class="{
                            'cursor-not-allowed text-gray-300':
                                pagination.prev_page_url === null,
                        }"
                        @click.prevent="switchPage(pagination.current_page - 1)"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span class="sr-only">Previous</span>
                        <!-- Heroicon name: solid/chevron-left -->
                        <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <!-- first page and section -->
                    <template v-if="section > 1">
                        <button
                            @click.prevent="switchPage(1)"
                            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            1
                        </button>

                        <button
                            @click.prevent="goBackSection()"
                            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            ...
                        </button>
                    </template>

                    <!-- {{ pages }} -->
                    <button
                        v-for="(page, index) in pages"
                        :key="index"
                        @click.prevent="switchPage(page)"
                        :class="{
                            'z-10 bg-sky-100 border-sky-500 text-sky-600':
                                pagination.current_page === page,
                        }"
                        aria-current="page"
                        class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                        {{ page }}
                    </button>

                    <!-- last page and section-->
                    <template v-if="section < sections">
                        <button
                            @click.prevent="goForwardSection()"
                            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            ...
                        </button>

                        <button
                            @click.prevent="switchPage(pagination.last_page)"
                            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            {{ pagination.last_page }}
                        </button>
                    </template>

                    <button
                        :class="{
                            'cursor-not-allowed text-gray-300':
                                pagination.next_page_url === null,
                        }"
                        @click.prevent="switchPage(pagination.current_page + 1)"
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span class="sr-only">Next</span>
                        <!-- Heroicon name: solid/chevron-right -->
                        <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    </div>

    <!-- <p>section : {{ section }}</p>
  <p>sections : {{ sections }}</p>
  <p>lastPage : {{ lastPage }}</p>
  <p>pages : {{ pages }}</p> -->
</template>

<script>
import _ from 'lodash';

export default {
    props: {
        pagination: Object,
        for: {
            type: String,
            default: 'default',
        },
        perSection: {
            type: Number,
            default: 7,
        },
    },

    emits: ['switched-page'],
    mounted() {
        // if (this.pagination.current_page > this.pagination.last_page) {
        //   this.switchPage(this.pagination.last_page);
        // }
    },

    computed: {
        sections() {
            return Math.ceil(this.pagination.last_page / this.perSection);
        },

        section() {
            return Math.ceil(this.pagination.current_page / this.perSection);
        },

        lastPage() {
            let lastPage =
                (this.section - 1) * this.perSection + this.perSection;

            if (this.section === this.sections) {
                lastPage = this.pagination.last_page;
            }

            return lastPage;
        },

        pages() {
            return _.range(
                (this.section - 1) * this.perSection + 1,
                this.lastPage + 1
            );
        },
    },

    methods: {
        switchPage(page) {
            if (page < 1 || page > this.pagination.total_pages) {
                return;
            }
            this.$emit('switched-page', page);
        },

        goBackSection() {
            this.switchPage(this.fitstPageOfSecton(this.section - 1));
        },

        goForwardSection() {
            this.switchPage(this.fitstPageOfSecton(this.section + 1));
        },

        fitstPageOfSecton(section) {
            return (section - 1) * this.perSection + 1;
        },
    },
};
</script>
