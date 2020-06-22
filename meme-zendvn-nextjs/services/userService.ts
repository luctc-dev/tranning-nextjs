import api from "./api";

type RegisterData = {
    email: string;
    fullname: string;
    password: string;
    repassword: string;
}

type PasswordData = {
    oldPassword: string,
	newPassword: string,
	reNewPassword: string
}

const userService = {
    getUserById: async (userId: string) => {
        return api.callJson(`/member/member.php?userid=${userId}`);
    },
    register: async (data: RegisterData) => {
        return api.callJson('/member/register.php', {
            data,
            method: "POST"
        })
    },
    changePassword: async (data: PasswordData, token) => {
        return api.callJson('/member/password.php', {
            data,
            token,
            method: "POST"
        })
    }
}

export default userService;