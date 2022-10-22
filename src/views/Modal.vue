<template>
    <ComponentLayout class="my-10" title="Modal you see anywhere in the web">
        <button @click.prevent="modal1 = !modal1">modal</button>
        <AppModal :state="modal1">
            <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
            >
                Payment successful
            </h3>
            <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur amet labore.
                </p>
            </div>
            <template #footer>
                <div class="flex justify-between items-center">
                    <div>
                        <button
                            class="text-white py-2 px-3 bg-gray-500 rounded"
                        >
                            close
                        </button>
                    </div>
                    <div>
                        <button
                            class="text-white py-2 px-3 bg-blue-500 rounded"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </template>
        </AppModal>
    </ComponentLayout>
</template>

<script setup>
import AppModal from '@/components/AppModal.vue';
import ComponentLayout from '@/components/ComponentLayout.vue';
import { ref } from 'vue';

const modal1 = ref(false);
</script>

<style scoped></style>
