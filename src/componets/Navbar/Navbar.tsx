import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import NavButton from "../Common/navButton/NavButton";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}><NavButton navButtonName={"PROFILE"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}><NavButton navButtonName={"MESSAGES"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}><NavButton navButtonName={"NEWS"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}><NavButton navButtonName={"MUSIC"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}><NavButton navButtonName={"SETTINGS"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}><NavButton navButtonName={"USERS"}/></NavLink>
            </div>
        </nav>
    )
}
