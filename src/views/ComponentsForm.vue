<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="submit">
      <BaseInput
        label="Email"
        type="text"
        v-model="email"
        :error="errors.email"
      />

      <BaseInput
        label="Password"
        type="password"
        v-model="password"
        :error="errors.password"
      />

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from 'vee-validate';
import { object, string, number, boolean } from 'yup';
import BaseCheckbox from '@/components/forms/BaseCheckbox.vue';
import BaseRadioGroup from '@/components/forms/BaseRadioGroup.vue';
import BaseInput from '@/components/forms/BaseInput.vue';
import BaseSelect from '@/components/forms/BaseSelect.vue';

export default {
  components: {
    BaseCheckbox,
    BaseRadioGroup,
    BaseInput,
    BaseSelect,
  },

  setup() {
    const validationSchema = object({
      email: string().required().email(),
      password: string().required('A cool title is required').min(3),
    });

    const { handleSubmit, errors } = useForm({
      validationSchema,
    });

    const { value: email } = useField('email');
    const { value: password } = useField('password');

    const submit = handleSubmit((values) => {
      console.log('submit', values);
    });

    return {
      email,
      password,
      submit,
      errors,
    };
  },
};
</script>
