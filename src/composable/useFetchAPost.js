import Http from "@/model/Http";
import {ref} from 'vue';

export function useFetchAPost(slug) {

    const post = ref('');
    let http = new Http()
    http
        .to(`/api/posts/${slug}`)
        .onSuccess(data => post.value = data)
        .onFailure(error => console.log(error))
        .fire()

    return {post};
}