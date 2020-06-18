import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
// import api from "../services/api";
import fetch from "isomorphic-fetch";
import { useGlobalState } from "../state";
import { useNotAuthen } from "../helpers/useAuthen";
// import Cookies from "js-cookie";

interface FormLogin {
    email: string;
    password: string;
}

const initFormData = {
    email: '',
    password: ''
}
// Chua dang nhap moi vao duoc
export default function Login(props) {
    useNotAuthen();
    const router = useRouter();
    const [formData, setFormData] = useState<FormLogin>(initFormData);
    const [userInfo] = useGlobalState("currentUser");
    const errorString = router.query.error;
    
    // useEffect(() => {
    //     console.log("userInfo Login Page", userInfo);
    // }, [userInfo])

    useEffect(() => {
        if(errorString) {
            alert("Dang nhap that bai"); // Su dung thu vien ho tro notification o ben ngoai
            window.history.pushState({}, document.title, "/login");
        }
    }, [errorString]);
    
    const handleOnChange = (key: string) => (evt: any) => {
        const value = evt.target.value;
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    
        // api
        //     .callJson('/member/login.php', { data: formData, method: 'POST' })
        //     .then(data => {
        //         console.log(data);
        //         // Loading
        //         // Token -> Js thiet lap vao Cookie 
        //         // Dang nhap thanh -> router.push('/')
        //     })
        const body = JSON.stringify(formData);
        const method = "POST"

        fetch('/api/login', {
            body,
            method,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("data = ", data);
            // Cookies.set("token", data.token, { expires: 30 });
            // router.push('/');
        })
            
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        const formElement = e.target;
        
        // B1: Handle Validation form data

        // B2: Goi ham submit cua Form
        formElement.submit();
    }

    return (
        <div className="ass1-login">
            <div className="ass1-login__logo">
                <a href="index.html" className="ass1-logo">ZendVn Meme</a>
            </div>
            <div className="ass1-login__content">
                <p>Đăng nhập</p>
                <div className="ass1-login__form">
                    {/* <form action="#" onSubmit={handleSubmit}> */}
                    <form action="/api/login" method="POST" onSubmit={handleSubmitForm}>
                        <input 
                            // value={formData.email}
                            // onChange={handleOnChange('email')}
                            name="email"
                            type="text" className="form-control" placeholder="Email" required />
                        <input 
                            // value={formData.password}
                            // onChange={handleOnChange('password')}
                            name="password"
                            type="password" className="form-control" placeholder="Mật khẩu" required />
                        <div className="ass1-login__send">
                            <a href="dang-ky.html">Đăng ký một tài khoản</a>
                            <button type="submit" className="ass1-btn">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}