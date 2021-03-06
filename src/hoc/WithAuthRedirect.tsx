import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import { PATH } from "../App";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.data.isAuth
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsForRedirectType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={PATH.LOGIN}/>
        return (
            <Component {...restProps as T} />
        );
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
