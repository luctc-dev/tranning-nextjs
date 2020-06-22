import { useState } from "react";
import userService from "../../services/userService";
import { useGlobalState } from "../../state";
import { useAuthen } from "../../helpers/useAuthen";

const initState = {
    oldPassword: "",
	newPassword: "",
	reNewPassword: ""
}

const UserChangePassword = () => {
    useAuthen();
    const [token] = useGlobalState("token");
    const [formData, setFormData] = useState(initState);
    const handleOnChange = (key: string) => (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();


        userService
            .changePassword(formData, token)
            .then(res => {
                if(res.status === 200) {
                    alert("Thay doi mat khau thanh cong");
                    setFormData(initState);
                } else {
                    alert(res.error);
                }
            })
    }

    return (
        <div className="ass1-login">
            <div className="ass1-login__content">
                <p>Đổi mật khẩu</p>
                <div className="ass1-login__form">
                    <form action="#" onSubmit={handleOnSubmit}>
                        <input 
                            value={formData.oldPassword}
                            onChange={handleOnChange('oldPassword')}
                            type="password" className="form-control" placeholder="Mật khẩu cũ" required />
                        <input 
                            value={formData.newPassword}
                            onChange={handleOnChange('newPassword')}
                            type="password" className="form-control" placeholder="Mật khẩu mới" required />
                        <input 
                            value={formData.reNewPassword}
                            onChange={handleOnChange('reNewPassword')}
                            type="password" className="form-control" placeholder="Xác nhận mật khẩu mới" required />
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