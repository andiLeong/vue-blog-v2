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
            if (!this.isLoggedIn) {
                return false;
            }

            const user = localStorage.getItem('user');
            if (user !== null) {
                const userData = JSON.parse(user);
                if (userData.id === 1) {
                    return true;
                }
            }

            if (state.user?.id === 1) {
                return true;
            }
            return false;
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
