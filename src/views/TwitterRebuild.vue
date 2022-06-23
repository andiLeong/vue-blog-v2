<template>


    <div class="my-20 space-y-5 mx-4  md:mx-auto" style="max-width: 30rem">

        <p class="dark:text-gray-100"> Rebuild Twitter Tweet Section</p>
        <p class="dark:text-gray-100"> not 100% perfect but at least play around with flex box</p>
        <div class="flex bg-gray-100 rounded shadow-lg px-4 py-3 space-x-6 ">
            <div class="mx-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/B522ED1B-EBC8-4BF9-8B9F-DCA4FD732F61.jpeg"
                     alt="profilw image">
            </div>
            <div class="content ">
                <div class="flex justify-between items-center">
                    <div class="flex space-x-2">
                        <div class="text-gray-700 font-bold">anthonyLiang</div>
                        <div class="text-gray-500">@andiliang413 . 21H</div>
                    </div>
                    <div class="dropdown flex items-center">
                        <AppDropDown>
                            <template #trigger>
                                <button class="font-bold ">...</button>
                            </template>

                            <div class="py-1" role="none">
                                <a href="#" class="drop-down-item" role="menuitem" tabindex="-1" id="menu-item-0">Account
                                    settings</a>
                                <a href="#" class="drop-down-item" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <a href="#" class="drop-down-item" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            </div>
                        </AppDropDown>
                    </div>
                </div>
                <div class="mt-1 font-normal">
                    1654466405 <br>
                    Looking for MEAN stack junior developer <br>
                    salary 4-6k <br>
                    contact +60 17-209 8252 <br>
                    <br>

                    <span class="text-sky-500">#ronaldTan</span> <span class="text-sky-500"> #recruiment </span> <span
                    class="text-sky-500">#bangsar </span>
                </div>
                <div class="meta mt-2 flex justify-between">
                    <div class="flex items-center ">
                        <div
                            class="text-gray-400 cursor-pointer hover:bg-sky-200 hover:text-sky-500 p-1.5 transition rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                        </div>
                        <span class="text-gray-700">8</span>
                    </div>
                    <div class="flex items-center justify-around">
                        <div
                            class="text-gray-400 cursor-pointer hover:bg-green-200 hover:text-green-500 p-1.5 transition rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                            </svg>
                        </div>
                        <span class="text-gray-700">800</span>
                    </div>
                    <div class="flex items-center justify-around">
                        <div
                            class="text-gray-400 cursor-pointer hover:bg-pink-200 hover:text-pink-500 p-1.5 transition rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </div>
                        <span class="text-gray-700">972</span>
                    </div>
                    <div class="flex items-center justify-around">
                        <div
                            class="text-gray-400 cursor-pointer hover:bg-blue-200 hover:text-blue-500 p-1.5 transition rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                            </svg>
                        </div>
                        <span class="text-gray-700">8</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import AppDropDown from '@/components/AppDropDown.vue'
</script>

<style scoped>


</style>