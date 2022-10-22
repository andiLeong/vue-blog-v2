<template>
    <div
        v-for="(skill, index) in skills"
        :key="index"
        class="flex flex-col md:flex-row md:items-center justify-between"
    >
        <div class="space-y-1 w-full md:w-2/4">
            <label class="form-label" for="">Skill {{ index + 1 }}</label>
            <input
                v-model="skill.name"
                placeholder="What particular skill set you got"
                required
                type="text"
                class="form-input"
            />
        </div>
        <!--        @click.prevent="remove('skills',index)"-->
        <div class="space-y-2 space-x-4 mt-3 md:mt-0">
            <RemoveButton
                v-if="index > 0"
                @click.prevent="$emit('remove', 'skills', index)"
            />

            <AddButton @click.prevent="$emit('add', 'skills')" />
        </div>
    </div>
</template>

<script setup>
import AddButton from '@/components/resume/AddButton.vue';
import RemoveButton from '@/components/resume/RemoveButton.vue';
const props = defineProps(['skills']);

defineEmits(['add', 'remove']);
</script>
