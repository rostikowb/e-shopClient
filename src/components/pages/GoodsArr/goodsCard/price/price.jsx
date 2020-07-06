import s from './price.module.css'
import React from 'react';

export const PriceBox = () => {

    const price = 100000;
    const interest = 10;
    const discount = Math.round(price-price/100*interest);

    return (
        <div className={s.priceBox}>
            <span className={s.oldPrice}>{price}₴</span>
            <span className={s.newPrice}>{discount}₴</span>
        </div>
    );
};