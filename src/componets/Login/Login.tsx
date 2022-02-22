import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import s from '../Common/FormsControls/FormControl.module.css'
import { PATH } from "../../App";

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null | undefined) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null | undefined
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
type CaptchaPropsType = {captchaUrl: string | null | undefined}
export const LoginForm: React.FC<InjectedFormProps<FormDataType, CaptchaPropsType> & CaptchaPropsType> =
    ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Input}
                   validate={[required]}
                   type='text'
                   name={'email'}
                   placeholder={'Email'}/>
        </div>
        <div>
            <Field component={Input}
                   validate={[required]}
                   type='password'
                   name={'password'}
                   placeholder={'Password'}/>
        </div>
        <div>
            <Field component={Input}
                   type='checkbox'
                   name={'rememberMe'}/> remember me
        </div>
        {captchaUrl && <img alt={"captcha"} src={captchaUrl}/>}
        {captchaUrl && <Field component={Input}
                              validate={[required]}
                              type='text'
                              name={'captcha'}
                              placeholder={'Symbols from image'}/>
        }
        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            <button>
                Login
            </button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm<FormDataType, CaptchaPropsType>({form: 'login'})(LoginForm)


export const Login = (props: MapStateToPropsType & mapDispatchToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={PATH.PROFILE}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        captchaUrl: state.auth.data.captchaUrl,
        isAuth: state.auth.data.isAuth
    }
}

export const LoginAPIComponent = connect<MapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {login})(Login)


