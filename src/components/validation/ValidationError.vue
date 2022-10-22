<template>
    <p class="mt-1 text-sm text-red-500 italic">
        <slot />
    </p>
</template>

<script>
export default {
    name: 'ValidationError',
};
</script>
