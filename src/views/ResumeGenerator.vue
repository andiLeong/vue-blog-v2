<template>

    <div class="mx-6  lg:mx-auto px-0 md:px-5 max-w-7xl my-20">
        <form class="space-y-8" action="">

            <div class="space-y-2">
                <h2 class="font-semibold text-xl text-gray-700">Information</h2>
                <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-12">
                    <div class="space-y-2 col-span-6">
                        <label class="form-label" for="">Name</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 col-span-6">
                        <label class="form-label" for="">Position</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 col-span-4">
                        <label class="form-label" for="">Email</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 col-span-4">
                        <label class="form-label" for="">Phone</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 col-span-4">
                        <label class="form-label" for="">Location</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 col-span-6">
                        <label class="form-label" for="">About</label>
                        <textarea class="form-textarea w-full" name="" id="" rows="3"></textarea>
                    </div>


                </div>

            </div>

            <div class="space-y-2">
                <h2 class="font-semibold text-xl text-gray-700">Experiences</h2>
                <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-4">
                    <div class="space-y-2">
                        <label class="form-label" for="">Position</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2">
                        <label class="form-label" for="">From</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2">
                        <label class="form-label" for="">To</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2">
                        <label class="form-label" for="">Company</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 col-span-3">
                        <label class="form-label" for="">About</label>
                        <textarea class="form-textarea w-full" name="" id="" rows="3"></textarea>
                    </div>

                    <div class="space-y-2 justify-self-end self-center ">
                        <button type="button" class="rounded-full text-white p-2 rounded-full text-xl bg-sky-400">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>


            <div class="space-y-2">
                <h2 class="font-semibold text-xl text-gray-700">Skills</h2>
                <div class="flex flex-col md:flex-row md:items-center justify-between">
                    <div class="space-y-2 w-full md:w-2/4">
                        <label class="form-label" for="">Skill</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 mt-3 md:mt-0">
                        <button type="button" class="rounded-full text-white p-2 rounded-full text-xl bg-sky-400">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            <div class="space-y-2">
                <h2 class="font-semibold text-xl text-gray-700">Educations</h2>
                <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-4">
                    <div class="space-y-2">
                        <label class="form-label" for="">Degree</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2">
                        <label class="form-label" for="">From</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2">
                        <label class="form-label" for="">To</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2">
                        <label class="form-label" for="">School</label>
                        <input type="text" class="form-input"/>
                    </div>

                    <div class="space-y-2 col-span-3">
                        <label class="form-label" for="">About</label>
                        <textarea class="form-textarea w-full" name="" id="" rows="3"></textarea>
                    </div>

                    <div class="space-y-2 justify-self-end self-center ">
                        <button type="button" class="rounded-full text-white p-2 rounded-full text-xl bg-sky-400">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            <div class="bg-gray-300 h-1 rounded my-5"></div>

            <div class="flex justify-end">
                <SubmitButton :loading="false">

                </SubmitButton>
            </div>
        </form>

    </div>

</template>

<script setup>
import {ref} from "vue";
import SubmitButton from '@/components/forms/SubmitButton.vue'

const resume = ref({
    name: null,
    position: '',
    email: '',
    location: '',
    phone: '',
    about: '',
    experiences: [],
    education: [],
    skills: []
});


</script>

<style scoped>

</style>