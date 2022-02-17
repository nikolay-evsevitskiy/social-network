import React from "react";
import style from "./preloaderMan.module.scss"



export const PreloaderMan = () => {

    return <>
        <div className={style.body}>
  <span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </span>
            <div className={style.base}>
                <span></span>
                <div className={style.face}></div>
            </div>
        </div>
        <div className={style.longfazers}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1>Loading...</h1>

    </>}

