import React from 'react'
import s from './img.module.css'
import img1 from './1.jpg'
import img2 from './2.jpg'

export const Img = () => {
    return (
        <div className={s.imgBox}>
            <img className={s.imgOne} src={img1} alt=""/>
            <img className={s.imgTwo} src={img2} alt=""/>
        </div>
    )
};