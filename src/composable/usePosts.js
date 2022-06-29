import {ref} from 'vue'


export default function usePosts() {
    const posts = ref([])
    const post = ref([])
    const loading = ref(false)

    const searchPosts = async (key) => {
        loading.value = true;
        let response = await axios.get(`/api/posts/search?key=${key}`)
        posts.value = response.data
        loading.value = false;
    }

    return {
        loading,
        posts,
        searchPosts
    };

}
