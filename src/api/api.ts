import axios from "axios";
import {InitialStateAuthDataType} from "../Redux/auth-reducer";

type followType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: 0 | 1
}
type getUsersType = {
    error: null | string
    items: []
    totalCount: number
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4bd60911-e7ab-47b0-851f-962a07b6cbc2'
    }
})

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const unfollow = (id: number) => {
    return instance.delete<followType>(`follow/${id}`)
        .then(response => response.data)
}

export const follow = (id: number) => {
    return instance.post<followType>(`follow/${id}`, {})
        .then(response => response.data)
}

export const logIn = () => {
    return instance.get<InitialStateAuthDataType>(`auth/me`)
}