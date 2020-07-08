import React from 'react'
import s from './goods.module.css'
import cyrillicToTranslit from 'cyrillic-to-translit-js'

console.log(cyrillicToTranslit().transform('Привет Мир!'));

export const Goods = ()=>{
    return(
        <div className={s.goodsBox}>
ss
        </div>
    )
};