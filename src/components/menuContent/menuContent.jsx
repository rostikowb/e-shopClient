import React from 'react'
import s from './menuContent.module.css'
import {Auth} from './auth/auth'
import {Logo} from './logo/logo'
import {Info} from "./info/info";
import {FilterBox} from "./filter/filter";

export const menuContent = () => {
    return (
        <div className={s.mainMenuBox}>
            <Logo/>
            <Auth/>
            <Info/>
            <FilterBox/>
        </div>
    )
};