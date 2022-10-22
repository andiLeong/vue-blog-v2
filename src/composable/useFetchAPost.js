import FetchHttp from '@/model/FetchHttp';
import { ref } from 'vue';

export function useFetchAPost(slug) {
    const post = ref('');
    let http = new FetchHttp();
    http.to(`/api/posts/${slug}`)
        .onSuccess((data) => (post.value = data))
        .onFailure((error) => console.log(error))
        .fire();

    return { post };
}
