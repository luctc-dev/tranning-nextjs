import "./header.scss";
import Link from "next/link";
import Cookies from "js-cookie";
import HeaderSearch from "./HeaderSearch";
import { useRouter } from "next/router";
import { useGlobalState } from "../../state";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
    const router = useRouter();
    const [, setToken] = useGlobalState("token");
    const [userInfo, setUserInfo] = useGlobalState("currentUser");

    function handleLogout() {
        const check = window.confirm('Ban co thuc su muon logout hay khong?');
        if(check) {
            Cookies.remove("token");
            setToken('');
            setUserInfo(null);
            router.push('/login');
        }
    }
    return (
        <header>
            <div className="ass1-header">
                <div className="container">
                    <Link href="/">
                        <a className="ass1-logo">ZendVn Meme</a>
                    </Link>
                    
                    <HeaderMenu />
                    
                    <HeaderSearch />

                    <Link href="/posts/create">
                        <a className="ass1-header__btn-upload ass1-btn">
                            <i className="icon-Upvote" /> Upload
                        </a>
                    </Link>

                    {
                        userInfo 
                        ? <div className="wrapper-user">
                            <Link href="/users/[userId]" as={`/users/${userInfo.USERID}`}>
                                <a className="user-header">
                                <span className="avatar">
                                    <img src={userInfo.profilepicture || "/images/avatar-02.png"} alt="avatar" />
                                </span>
                                <span className="email">{userInfo.email}</span>
                                </a>
                            </Link>
                            <div onClick={handleLogout} className="logout">Logout</div>
                        </div>
                        : <Link href="/login">
                            <a className="ass1-header__btn-upload ass1-btn">
                                Login
                            </a>
                        </Link>
                    }
                    
                    
                </div>
            </div>
        </header>
    )
}