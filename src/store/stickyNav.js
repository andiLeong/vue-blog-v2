import { defineStore } from 'pinia';

export const useStickyNavStore = defineStore({
    id: 'sticky-nav',
    state: () => ({
        shouldApply: false,
    }),
    getters: {},
    actions: {
        apply(apply) {
            this.shouldApply = apply;
        },
    },
});
