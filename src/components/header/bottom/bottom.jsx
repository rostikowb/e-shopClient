import React from 'react';
import s from './bottom.module.css';
import MenuBtn from './menu/menu'
import Logo from './logo/logo'
import CatalogBtn from './catalogBtn/catalogBtn'
import Search from './searchInput/search'
import Actions from './actions/actions'

export default () => {
    console.log(navigator.userAgent);
    return(
        <div className={s.headerBottom}>

            <MenuBtn/>
            <Logo/>
            <CatalogBtn/>
            <Search/>
            <Actions/>
        </div>
    )
}