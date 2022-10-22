<template>
    <ComponentLayout title="Flex Box Grid" class="mt-10 space-y-0">
        <div class="flex-row">
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
        </div>

        <div class="flex-row">
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
        </div>

        <div class="flex-row">
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
        </div>

        <div class="flex-row">
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
        </div>

        <div class="flex-row">
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
            <div class="flex-clo">
                <div class="card">some text here</div>
            </div>
        </div>
    </ComponentLayout>
</template>

<script setup>
import ComponentLayout from '@/components/ComponentLayout.vue';
</script>

<style scoped>
.flex-row {
    display: flex;
    margin-left: -1rem;
    margin-right: -1rem;
}

.flex-clo {
    flex: 1;
    padding: 0.5rem;
}

.card {
    height: 100px;
    background-color: dimgrey;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
