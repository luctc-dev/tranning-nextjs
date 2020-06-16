import Cookies from "js-cookie";
import { useEffect } from "react";
import { parseJwt } from ".";
import { useRouter } from "next/router";

// Bat buoc dang nhap moi vao chua
function useAuthentication() {
    const router = useRouter();
    const token = Cookies.get('token');

    useEffect(() => {
        const userToken = parseJwt(token);
        if(!(userToken && userToken.id && userToken.email)) {
            router.push('/');
        } 
    }, [token])
}

// Chua dang nhap moi cho phep vao
// Da dang nhap roi -> Day qua homepage
function useNotAuthenticated() {
    const router = useRouter();
    const token = Cookies.get('token');

    useEffect(() => {
        const userToken = parseJwt(token);
        if(userToken && userToken.id && userToken.email) {
            router.push('/');
        } 
    }, [token])
}

export {
    useAuthentication,
    useNotAuthenticated
}