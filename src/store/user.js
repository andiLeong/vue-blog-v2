import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: null,
    }),
    getters: {
        isLoggedIn: (state) => {
            return state.user !== null || localStorage.getItem('user') !== null;
        },

        isAdmin(state) {
            const user = localStorage.getItem('user');

            if (!this.isLoggedIn || user === null) {
                return false;
            }

            const userData = JSON.parse(user);
            return userData.is_admin || state.user?.is_admin;
        },
    },
    actions: {
        setUser(user, ref = null) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            if (ref !== null) {
                ref.value = this.user;
            }
            return this.user;
        },

        setUserFromStorage() {
            const user = localStorage.getItem('user');
            if (user) {
                this.setUser(JSON.parse(user));
            }
        },

        logout() {
            localStorage.removeItem('user');
            location.reload();
        },

        async login(credentials) {
            await axios.get('/sanctum/csrf-cookie');
            return await axios.post('/login', credentials).then(({ data }) => {
                this.setUser(data);
            });
        },
    },
});
