<template>
  <label :for="uuid" v-if="label" :class="labelClass">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeHolderValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <p
    v-if="error"
    class="validation-error"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import UniqueID from '@/features/UniqueID';

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
    placeHolder: {
      type: [String],
    },
    error: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      uuid: UniqueID().getID(),
    };
  },

  computed: {
    placeHolderValue() {
      return this.placeHolder || this.label;
    },
  },
};
</script>
