export default function Register() {
    return (
        <div className="ass1-login">
            <div className="ass1-login__logo">
                <a href="index.html" className="ass1-logo">ZendVn Meme</a>
            </div>
            <div className="ass1-login__content">
                <p>Đăng ký một tài khoản</p>
                <div className="ass1-login__form">
                    <form action="#">
                        <input type="text" className="form-control" placeholder="Tên hiển thị" required />
                        <input type="email" className="form-control" placeholder="Email" required />
                        <input type="password" className="form-control" placeholder="Mật khẩu" required />
                        <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" required />
                        <div className="ass1-login__send">
                            <a href="dang-nhap.html">Đăng nhập</a>
                            <button type="submit" className="ass1-btn">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}