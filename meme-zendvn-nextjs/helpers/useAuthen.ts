import { useEffect } from "react";
import { parseJwt } from ".";
import { useGlobalState } from "../state";
import { useRouter } from "next/router";

// Bat buoc dang nhap moi vao chua
// Create Post
function useAuthen() {
    const router = useRouter();
    const [token] = useGlobalState("token");
    
    useEffect(() => {
        const userToken = parseJwt(token);
        if(!(userToken && userToken.id && userToken.email)) {
            router.push('/login');
        } 
    }, [token])
}

// Chua dang nhap moi cho phep vao
// Da dang nhap roi -> Day qua homepage
function useNotAuthen() {
    const router = useRouter();
    const [token] = useGlobalState("token");

    useEffect(() => {
        const userToken = parseJwt(token);
        if(userToken && userToken.id && userToken.email) {
            router.push('/');
        } 
    }, [token])
}

export {
    useAuthen,
    useNotAuthen
}