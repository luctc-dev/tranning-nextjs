import fetch from "isomorphic-fetch";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { useGlobalState } from "../state";
import { useNotAuthen } from "../helpers/useAuthen";
import { Button } from "../components/Button";

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
    const [loading, setLoading] = useState(false);
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
        if(loading === true) return;
        
        const formElement = e.target;
        
        // B1: Handle Validation form data
        setLoading(true);

        // B2: Goi ham submit cua Form
        formElement.submit();
    }

    return (
        <div className="ass1-login">
            <div className="ass1-login__logo">
                <Link href="/">
                    <a className="ass1-logo">ZendVn Meme</a>
                </Link>
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
                            <Link href="/register">
                                <a>Đăng ký một tài khoản</a>
                            </Link>
                            <Button type="submit" className="ass1-btn" isLoading={loading}>Đăng nhập</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}