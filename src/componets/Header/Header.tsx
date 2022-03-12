import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logoSamurai2.1.png'
import SuperButton from "../Common/superButton/SuperButton";


type HeaderType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header: React.FC<HeaderType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo}
                     alt="social network"/>
            </div>
            <div className={s.title}>
                <h1>Samurai Social Network</h1>
            </div>
            {isAuth ? <div className={s.loginBlock}>
                    <div>{login} </div>
                    <SuperButton onClick={logout} className={"red"}>Log out</SuperButton></div> :
                <></>}
        </header>
    )
}
