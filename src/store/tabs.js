import { defineStore } from 'pinia';

export const useTabsStore = defineStore({
    id: 'tabs',
    state: () => ({
        selected: [{ id: 'default', title: 'hello' }],
    }),
    getters: {},
    actions: {
        select(tabs) {
            let id = tabs.id;
            let existed = this.selected.filter((select) => select.id === id);
            if (existed.length > 0) {
                existed[0].title = tabs.title;
                return;
            }
            this.selected.push(tabs);
            return this.selected;
        },

        tab(id) {
            let existed = this.selected.filter((select) => select.id === id);

            if (existed.length > 0) {
                return existed[0].title;
            }
            return null;
        },
    },
});
