import axios from "axios";
import {ProfileStateType} from "../Redux/profile-reducer";
import {FormDataType} from "../componets/Profile/ProfileInfo/ProfiledataForm";

export type FollowType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: 0 | 1
}
type getUsersType = {
    error: null | string
    items: [ItemGetUsersType]
    totalCount: number
}
export type ItemGetUsersType = {
    followed: boolean
    id: number
    name: string
    photos: PhotoType
    status?: string
    uniqueUrlName?: string
}
export type PhotoType = {
    small?: string
    large?: string
}
type updateStatusType = {
    resultCode: number
    messages: [string]
    data: {}
}
type loginDataType = {
    resultCode: number
    messages: [],
    data: {
        userId: number
    }
}
type logoutDataType = {
    resultCode: number
    messages: [],
    data: {}
}

type authMeDataType = {
    resultCode: number
    messages: []
    data: {
        id: number
        email: string
        login: string
    }
}
type SavePhotoStateType = {
    data: {
        small: string,
        large: string
    }
    resultCode: number
    messages: [string]
}
type SaveProfileType = {
    resultCode: number
    messages: [string],
    data: {}
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4bd60911-e7ab-47b0-851f-962a07b6cbc2'
    }
})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete<FollowType>(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post<FollowType>(`follow/${id}`, {})
            .then(response => response.data)
    },
    getProfile(userID: number | null) {
        return profileAPI.getProfile(userID)
    }
}

export const authAPI = {

    me() {
        return instance.get<authMeDataType>(`auth/me`, {
            withCredentials: true
        })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<loginDataType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<logoutDataType>(`auth/login`)
    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{url: string}>(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    getProfile(userID: number | null) {
        return instance.get<ProfileStateType>(`profile/${userID}`)
    },
    getStatus(userID: string) {
        return instance.get<string>(`profile/status/${userID}`)
    },
    updateStatus(status: string) {
        return instance.put<updateStatusType>(`profile/status`, {status: status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<SavePhotoStateType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(value: FormDataType) {
        return instance.put<SaveProfileType>(`profile`, value)
    }
}

