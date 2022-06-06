import {useStore} from "vuex";
import router from '@/router'
import store from '@/store'

export default function useUnauthenticated(){

    // const store = useStore()
    // console.log(useStore)
    store.dispatch('logout');
    return router.push({name: 'login'});
}
