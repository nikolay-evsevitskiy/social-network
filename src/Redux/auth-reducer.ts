import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

type SetUserDataType = ReturnType<typeof setAuthUserData>
export type GetAuthUserDataType = ReturnType<typeof getAuthUserData>
export type GetCaptchaUrlActionType = ReturnType<typeof getCaptchaUrlSuccess>


type ActionType = SetUserDataType | GetCaptchaUrlActionType
export type InitialStateAuthDataType = {
    data: {
        id: number | null
        email: string | null
        logIn: string | null
        isAuth: boolean
        captchaUrl?: string | null
    }
}

const initialState: InitialStateAuthDataType = {
    data: {
        email: null,
        id: null,
        logIn: null,
        isAuth: false,
        captchaUrl: null
    }
}

const authReducer = (state: InitialStateAuthDataType = initialState, action: ActionType): InitialStateAuthDataType => {
    switch (action.type) {
        case 'social-network/auth-reducer/SET-USER-DATA':
            return {
                ...state,
                data: {...action.payload},
            }
        case "social-network/auth-reducer/GET-CAPTCHA-URL-SUCCESS":
            return {...state, data: {...state.data, captchaUrl: action.captchaUrl}}

        default:
            return state;
    }
};

//action
const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {type: "social-network/auth-reducer/GET-CAPTCHA-URL-SUCCESS", captchaUrl} as const
}
const setAuthUserData = (email: string | null, id: number | null, logIn: string | null, isAuth: boolean) => {
    return {type: 'social-network/auth-reducer/SET-USER-DATA', payload: {email, id, logIn, isAuth}} as const
}
//thunk
export const getAuthUserData = () => async (dispatch: Dispatch<ActionType>) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data.email, response.data.data.id, response.data.data.login, true))
    }
};
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null | undefined) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
};
export const getCaptchaUrl = () => async (dispatch: Dispatch<any>) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export const logout = () => async (dispatch: Dispatch<ActionType>) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export default authReducer;