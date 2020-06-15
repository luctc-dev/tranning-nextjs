const UserChangePassword = () => {

    return (
        <div className="ass1-login">
            <div className="ass1-login__content">
                <p>Đổi mật khẩu</p>
                <div className="ass1-login__form">
                    <form action="#">
                        <input type="password" className="form-control" placeholder="Mật khẩu cũ" required />
                        <input type="password" className="form-control" placeholder="Mật khẩu mới" required />
                        <input type="password" className="form-control" placeholder="Xác nhận mật khẩu mới" required />
                        <div className="ass1-login__send justify-content-center">
                            <button type="submit" className="ass1-btn">Gửi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserChangePassword;