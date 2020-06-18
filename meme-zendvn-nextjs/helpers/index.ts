import atob from "atob";
import cookie from "cookie";
import Cookies from "js-cookie";
import { NextPageContext } from "next";

type UserToken = {
    id: string;
    email: string;
}

export const parseJwt = (token: string) => {
    try {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch(e) {
        return null;
    }
}

export const getTokenSSRAndCSS = (ctx?: NextPageContext): [string, UserToken | null] => {
    let token = '';
    let userToken = null;
    if(typeof window === "undefined") {
        // SSR
        const cookieStr = ctx?.req?.headers?.cookie || '';
        token = cookie.parse(cookieStr).token;
        userToken = parseJwt(token);
    } else {
        // CSR
        token = Cookies.get('token') || '';
    }

    return [token, userToken];
}