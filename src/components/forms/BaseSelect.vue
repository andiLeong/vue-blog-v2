<template>
    <label v-if="label" :class="labelClass">{{ label }}</label>
    <select
        class="field"
        :value="modelValue"
        v-bind="{
            ...$attrs,
            onChange: ($event) => {
                $emit('update:modelValue', $event.target.value);
            },
        }"
    >
        <option disabled value>please select</option>
        <option
            v-for="option in options"
            :value="option"
            :key="option"
            :selected="option === modelValue"
        >
            {{ option }}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        labelClass: {
            type: String,
            default: '',
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
        options: {
            type: Array,
            required: true,
        },
    },
};
</script>
