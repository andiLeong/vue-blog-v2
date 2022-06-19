<template>

    <div class="max-w-6xl md:mx-auto mx-4 my-10 space-y-4">
        <h1 class="text-2xl font-bold ">Tabs</h1>
        <div class="space-y-10">
            <div>
                <p>tab id is my-tab</p>
                <AppTabs id="my-tab">
                    <AppTab title="First">
                        <p>Hello world. first</p>
                    </AppTab>
                    <AppTab title="Second">
                        <p>Hello world again. second</p>
                    </AppTab>
                    <AppTab title="Third">
                        <p>Hello world and out. third</p>
                    </AppTab>
                    <AppTab title="Wew">
                        <p>It works! forth</p>
                    </AppTab>
                </AppTabs>
            </div>

            <div>
                <p>tab id is second-tab</p>
                <AppTabs id="second-tab">
                    <AppTab title="Setting">
                        <p>Setting tab</p>
                    </AppTab>
                    <AppTab title="Order" :active="true">
                        <p>Order overview tab I am the default tab open</p>
                    </AppTab>
                    <AppTab title="Refunds">
                        <p>View your all refund</p>
                    </AppTab>
                </AppTabs>
            </div>
        </div>
    </div>

</template>

<script setup>
import AppTabs from '@/components/AppTabs.vue';
import AppTab from '@/components/AppTab.vue';
</script>
