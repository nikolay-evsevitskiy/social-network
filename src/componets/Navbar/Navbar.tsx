import React from 'react';
import {Link} from 'react-router-dom';
import s from './Navbar.module.css';
import NavButton from "../Common/navButton/NavButton";
import {PATH} from "../../App";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to={PATH.PROFILE} className={s.active}><NavButton navButtonName={"PROFILE"}/></Link>
            </div>
            <div className={s.item}>
                <Link to={PATH.DIALOGS} className={s.active}><NavButton navButtonName={"MESSAGES"}/></Link>
            </div>
            <div className={s.item}>
                <Link to={PATH.NEWS} className={s.active}><NavButton navButtonName={"NEWS"}/></Link>
            </div>
            <div className={s.item}>
                <Link to={PATH.MUSIC} className={s.active}><NavButton navButtonName={"MUSIC"}/></Link>
            </div>
            <div className={s.item}>
                <Link to={PATH.SETTINGS} className={s.active}><NavButton navButtonName={"SETTINGS"}/></Link>
            </div>
            <div className={s.item}>
                <Link to={PATH.USERS} className={s.active}><NavButton navButtonName={"USERS"}/></Link>
            </div>
        </nav>
    )
}
