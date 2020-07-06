import s from './cardBasket.module.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons/index";

export const CardBasketBox = () => {

    return (
        <div className={s.cardBox}>
            <FontAwesomeIcon className={s.icon} icon={faShoppingBasket} title='Добавить товар в корзину.'/>
        </div>
    );
};