import {defineStore} from 'pinia'

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        theme: 'light'
    }),
    getters: {
        getLocalTheme: () => {
            return localStorage.getItem('theme');
        }
    },
    actions: {
        setTheme(ref = null) {
            if (this.theme === 'light') {
                this.theme = 'dark';
                localStorage.setItem('theme', 'dark');
            }else{
                this.theme = 'light';
                localStorage.setItem('theme', 'light');
            }

            if(ref !== null){
               ref.value = this.theme
            }
            return this.theme;
        },

        setLocalTheme(ref) {
            let localTheme = this.getLocalTheme
            if (localTheme) {
                ref.value = localTheme;
                this.theme = localTheme;
            }
        },


    }
})