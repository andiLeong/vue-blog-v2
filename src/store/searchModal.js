import {defineStore} from 'pinia'

export const useSearchModalStore = defineStore({
    id: 'search-modal',
    state: () => ({
        show: false
    }),
    getters: {

    },
    actions: {
        setTo(bool = true) {
            this.show = bool
        }
    }
})