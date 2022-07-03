<template>

    <ComponentLayout title="Media Object You Had Seen" class="my-20">
        <div class="gap-3 grid grid-cols-1">
            <div class="flex md:flex-row flex-col p-3 border border-gray-300 rounded shadow-md">
                <div class="order-2 md:order-1 space-y-2">
                    <h4 class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur debitis doloremque sed
                    </h4>
                    <p class="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut distinctio dolor dolorum earum eum
                        magnam maiores modi nam odit, perferendis quae quaerat quibusdam quidem saepe ut vitae voluptatem
                        voluptatum.
                    </p>
                </div>
                <div style="min-width: 3em" class="md:ml-1 order-1 md:order-2 mb-2 md:mb-0">
                    <img class="h-10 w-10 rounded-full" src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/B522ED1B-EBC8-4BF9-8B9F-DCA4FD732F61.jpeg" alt="">
                </div>
            </div>


            <div class="flex md:flex-row flex-col p-3 border border-gray-300 rounded shadow-md">
                <div class="order-2 md:order-1 space-y-2">
                    <h4 class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur debitis doloremque sed
                    </h4>
                    <p class="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut distinctio dolor dolorum earum eum
                        magnam maiores modi nam odit, perferendis quae quaerat quibusdam quidem saepe ut vitae voluptatem
                        voluptatum.
                    </p>
                </div>
                <div style="min-width: 3em" class="md:ml-1 order-1 md:order-2 mb-2 md:mb-0">
                    <img class="h-10 w-10 rounded-full" src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/B522ED1B-EBC8-4BF9-8B9F-DCA4FD732F61.jpeg" alt="">
                </div>
            </div>
        </div>

    </ComponentLayout>
</template>

<script>
import ComponentLayout from "@/components/ComponentLayout.vue";

export default {
    name: "MediaObject",
    components: {ComponentLayout}
}
</script>

<style scoped>

</style>