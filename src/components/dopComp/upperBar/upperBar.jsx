import React from 'react';
import s from './upperBar.module.css'
import {Sort} from "./sort/sort";
import {Salt} from "./salt/salt";

export const UpperBar = () => {

    return (
        <div className={s.upperBar}>
            <Salt/>
            <Sort/>
        </div>
    );
};