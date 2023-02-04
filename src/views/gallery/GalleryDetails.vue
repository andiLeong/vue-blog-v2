<template>
    <Pinned>
        <div class="space-y-6 mr-20 w-full" v-if="file">
            <div>
                <div
                    class="block w-full aspect-w-10 aspect-h-12 rounded-lg overflow-hidden"
                >
                    <img :src="file.url" alt="" class="object-cover" />
                </div>
                <div class="mt-4 flex items-start justify-between">
                    <div>
                        <h2
                            class="text-lg font-medium text-gray-900 dark:text-white"
                        >
                            <span class="sr-only">Details for </span
                            >{{ file.name }}
                        </h2>
                        <p
                            class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                            {{ file.size }} MB
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="font-medium text-gray-900 dark:text-gray-200">
                    Information
                </h3>
                <dl
                    class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                    <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500 dark:text-gray-200">
                            Created at :
                        </dt>
                        <dd class="text-gray-900 dark:text-white">
                            {{ published_at }}
                        </dd>
                    </div>

                    <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500 dark:text-gray-200">
                            Taken at :
                        </dt>
                        <dd class="text-gray-900 dark:text-white">
                            {{ taken_at }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </Pinned>
</template>

<script setup>
import Pinned from '@/components/Pinned.vue';
import { computed } from 'vue';
import moment from 'moment';

const props = defineProps(['file']);

const published_at = computed(() => toFormat(props.file.created_at));
const taken_at = computed(() => toFormat(props.file.last_modified));

function toFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
    return moment(date).format(format);
}
</script>

<style scoped></style>
