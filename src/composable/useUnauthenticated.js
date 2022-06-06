import router from '@/router'
import store from '@/store'

export default function useUnauthenticated(){

    store.dispatch('logout');
    return router.push({name: 'login'});
}
