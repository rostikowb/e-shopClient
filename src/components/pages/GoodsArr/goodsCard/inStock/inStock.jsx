import s from './inStock.module.css'
import React from 'react';

export const InStock = () => {

    return (
        <div className={s.inStockBox}>
            <span>В наличии</span>
        </div>
    );
};