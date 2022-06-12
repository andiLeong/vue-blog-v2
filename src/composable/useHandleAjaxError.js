import {useUserStore} from "@/store/user"
import router from "@/router";

export default function useHandleAjaxError(error){

    let status = error.response.status;
    if (status === 401) {
        useUserStore().logout()
        return router.push({name: 'login'});
    }

    if (status === 403 || status === 401) {
        return alert(error.response.data.message);
    }
    console.log(error.response.data.errors);
    return error.response.data.errors;
}
