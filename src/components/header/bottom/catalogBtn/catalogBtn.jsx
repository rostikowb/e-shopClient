import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import s from './catalogBtn.module.css';


export default () => {
    return (
        <div className={s.catalogBtn}>
            <button>
                <span className={s.catalogBtn1}><FontAwesomeIcon className={s.catalogBtn1Icon} icon={faThLarge}/> КАТАЛОГ ТОВАРОВ</span>
                <span className={s.catalogBtn2}><FontAwesomeIcon className={s.catalogBtn2Icon} icon={faThLarge}/> КАТАЛОГ</span>
                <span className={s.catalogBtn3}><FontAwesomeIcon className={s.catalogBtn2Icon} icon={faThLarge}/></span>
            </button>
        </div>
    )
}