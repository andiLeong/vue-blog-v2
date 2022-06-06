import useUnauthenticated from "@/composable/useUnauthenticated";

export default function useHandleAjaxError(error){

    let status = error.response.status;
    if (status === 401) {
        return useUnauthenticated()
    }

    if (status === 403 || status === 401) {
        return alert(error.response.data.message);
    }
    console.log(error.response.data.errors);
    return error.response.data.errors;
}
