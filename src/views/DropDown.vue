<template>

    <ComponentLayout class="my-10" title="Drop Down">
        <div class="md:grid grid-cols-3 md:space-y-0 flex justify-between">
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


        </div>
    </ComponentLayout>
</template>

<script setup>
import AppDropDown from '@/components/AppDropDown.vue'
import ComponentLayout from '@/components/ComponentLayout.vue'
</script>

<style scoped>

</style>