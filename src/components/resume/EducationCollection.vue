<template>
    <div v-for="(education, index) in educations" :key="index">
        <h3>Education {{ index + 1 }}</h3>
        <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-4">
            <div class="space-y-2">
                <label class="form-label" for="">Degree</label>
                <input
                    v-model="education.degree"
                    placeholder="Degree"
                    :required="shouldRequired"
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2">
                <label class="form-label" for="">From</label>
                <input
                    v-model="education.from"
                    placeholder="Starts which year and month"
                    :required="shouldRequired"
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2">
                <label class="form-label" for="">To</label>
                <input
                    v-model="education.to"
                    placeholder="Ended in which year"
                    :required="shouldRequired"
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2">
                <label class="form-label" for="">School</label>
                <input
                    v-model="education.school"
                    placeholder="Schools's name"
                    :required="shouldRequired"
                    type="text"
                    class="form-input"
                />
            </div>

            <div class="space-y-2 col-span-3">
                <label class="form-label" for="">About</label>
                <AppTextarea
                    :body="education.about"
                    @update:body="(newValue) => (education.about = newValue)"
                    class="js-textarea form-textarea w-full overflow-hidden"
                    placeholder="How you doing in school"
                    :required="shouldRequired"
                    rows="3"
                />
            </div>

            <div class="space-y-2 space-x-4 justify-self-end self-center">
                <RemoveButton
                    v-if="index > 0"
                    @click.prevent="$emit('remove', 'educations', index)"
                />
                <AddButton @click.prevent="$emit('add', 'educations')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import AddButton from '@/components/resume/AddButton.vue';
import RemoveButton from '@/components/resume/RemoveButton.vue';
import AppTextarea from '@/components/AppTextarea.vue';

defineProps(['educations', 'shouldRequired']);

defineEmits(['add', 'remove']);
</script>
