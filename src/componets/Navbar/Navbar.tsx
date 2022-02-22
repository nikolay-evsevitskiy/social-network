import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import NavButton from "../Common/navButton/NavButton";
import {PATH} from "../../App";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.PROFILE} activeClassName={s.active}><NavButton navButtonName={"PROFILE"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.DIALOGS} activeClassName={s.active}><NavButton navButtonName={"MESSAGES"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.NEWS} activeClassName={s.active}><NavButton navButtonName={"NEWS"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.MUSIC} activeClassName={s.active}><NavButton navButtonName={"MUSIC"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.SETTINGS} activeClassName={s.active}><NavButton navButtonName={"SETTINGS"}/></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.USERS} activeClassName={s.active}><NavButton navButtonName={"USERS"}/></NavLink>
            </div>
        </nav>
    )
}
