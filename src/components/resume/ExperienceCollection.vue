<template>
    <div v-for="(experience, index) in experiences" :key="index">
        <h3>Experience {{ index + 1 }}</h3>
        <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-4">
            <div class="space-y-2">
                <label class="form-label" for="">Position</label>
                <input
                    v-model="experience.position"
                    placeholder="Position You Were In"
                    required
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2">
                <label class="form-label" for="">From</label>
                <input
                    v-model="experience.from"
                    placeholder="From When"
                    required
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2">
                <label class="form-label" for="">To</label>
                <input
                    v-model="experience.to"
                    placeholder="Until when"
                    required
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2">
                <label class="form-label" for="">Company</label>
                <input
                    v-model="experience.company"
                    placeholder="Your X company's name"
                    required
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2 col-span-3">
                <label class="form-label" for="">About</label>
                <AppTextarea
                    :body="experience.about"
                    @update:body="(newValue) => (experience.about = newValue)"
                    class="js-textarea form-textarea w-full overflow-hidden"
                    placeholder="What did you do ha"
                    required
                    rows="3"
                />
            </div>

            <div class="space-y-2 space-x-4 justify-self-end self-center">
                <RemoveButton
                    v-if="index > 0"
                    @click.prevent="$emit('remove', 'experiences', index)"
                />
                <AddButton @click.prevent="$emit('add', 'experiences')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import AddButton from '@/components/resume/AddButton.vue';
import RemoveButton from '@/components/resume/RemoveButton.vue';
import AppTextarea from '@/components/AppTextarea.vue';

const props = defineProps(['experiences']);

defineEmits(['add', 'remove']);
</script>
