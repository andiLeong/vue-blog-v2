<template>
  <AppTabs>
    <AppTab title="First">
      <p>Hello world.</p>
    </AppTab>
    <AppTab title="Second">
      <p>Hello world again.</p>
    </AppTab>
    <AppTab title="Third">
      <p>Hello world and out.</p>
    </AppTab>
    <AppTab title="Wew">
      <p>It works!</p>
    </AppTab>
  </AppTabs>

</template>

<script setup>
import AppTabs from '@/components/AppTabs.vue';
import AppTab from '@/components/AppTab.vue';
</script>
