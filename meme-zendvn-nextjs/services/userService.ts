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

type ProfileData = {
    fullname: string;
    gender: string;
    description: string;
    avatar: File | null;
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
    },
    updateProfile: async(profileData: ProfileData, token: string) => {
        const data = new FormData();
        data.append("fullname", profileData.fullname);
        data.append("gender", profileData.gender);
        data.append("description", profileData.description);

        if(profileData.avatar) {
            data.append("avatar", profileData.avatar);
        }

        return api.callFormData('/member/update.php', {
            data,
            token,
        })
    }
}

export default userService;