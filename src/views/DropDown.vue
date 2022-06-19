<template>

    <div class="md:mx-auto mx-4 max-w-6xl my-10">

        <div class="grid grid-cols-3">
            <div>
                <AppDropDown>
                    <template #trigger>
                        <button class="bg-blue-400 text-white p-3 rounded">
                            Right align
                        </button>
                    </template>

                    <div class="py-1" role="none">
                        <a href="#" class="drop-down-item" role="menuitem" tabindex="-1" id="menu-item-0">Account
                            settings</a>
                        <a href="#" class="drop-down-item" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                        <a href="#" class="drop-down-item" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                    </div>
                </AppDropDown>
            </div>

            <div>
                <AppDropDown direction="left">
                    <template #trigger>
                        <button class="bg-red-400 text-white p-3 rounded">
                            Left align
                        </button>
                    </template>

                    <div class="py-1" role="none">
                        <a href="#" class="drop-down-item" role="menuitem" tabindex="-1">Account settings</a>
                        <a href="#" class="drop-down-item" role="menuitem" tabindex="-1">Support</a>
                        <a href="#" class="drop-down-item" role="menuitem" tabindex="-1">License</a>
                    </div>
                </AppDropDown>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppDropDown from '@/components/AppDropDown.vue'
</script>

<style scoped>

</style>