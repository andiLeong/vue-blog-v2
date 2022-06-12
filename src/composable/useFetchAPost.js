
export function useFetchAPost(slug,post){

    axios
        .get(`/api/posts/${slug}`)
        .then((response) => {
            post.value = response.data;
        })
        .catch((error) => {
            alert(error);
            console.log(error);
        });

    return {post};
}