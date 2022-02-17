import React from "react";
import preloader from "../../../assets/images/Rolling-1s-200px.svg";
import style from "./preloader.module.css";
import {PreloaderMan} from "./PreloaderMan";

type PreloaderType = {
    isFetching: boolean
}

export const Preloader: React.FC<PreloaderType> = ({isFetching}) => {
    return <div className={style.preloader}>
        {/*{isFetching ? <img src={preloader} alt={'loading...'}/> : null}*/}
        {isFetching ? <PreloaderMan/> : null}
    </div>
}
