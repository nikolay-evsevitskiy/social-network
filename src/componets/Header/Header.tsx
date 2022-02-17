import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/images/logo.svg'

type HeaderType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header: React.FC<HeaderType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img src={logo}
                 alt="social network"/>
            <h1>Samurai Social Network</h1>
            <div className={s.loginBlock}>
                {isAuth ? <div>{login} - <button onClick={logout}>Log out</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
