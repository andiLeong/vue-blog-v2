
export default function useUnauthenticated(){

    let user = JSON.parse(localStorage.getItem('user'));
    if (user !== null && user.email == 'andiliang9988@gmail.com') {
        return true;
    }
    return false;
}
