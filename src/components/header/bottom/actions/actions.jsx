import React from 'react';
import s from './actions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
// import heart from './heart.svg'
// import {TextField} from "material-ui";


export default () => {
    // noinspection JSAnnotator
    return (
        <div className={s.actionBox}>
            {/*<img src={heart} alt=""/>*/}
            <FontAwesomeIcon className={s.icon+' '+s.heart} icon={faHeart}/>
            <FontAwesomeIcon className={s.icon+' '+s.basket} icon={faShoppingBasket}/>
        </div>
    )
}