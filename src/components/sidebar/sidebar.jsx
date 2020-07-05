import React from 'react'
import s from './sidebar.module.css'
import {menuContent as Menu} from '../menuContent/menuContent'

export default () => {
    return (
        <div className={s.mainBox}>
            <Menu/>
        </div>


    )
}