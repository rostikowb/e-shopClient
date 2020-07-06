import React from 'react'
import s from './goodsArr.module.css'
import {GoodsCard} from "./goodsCard/goodsCard";
import {UpperBar} from "../../dopComp/upperBar/upperBar";

export const GoodsArr = () =>{
    return(
        <div className={s.goodsArr}>
            <UpperBar/>
            <ul className={s.goodsBox}>

                {/*Кількість блоків повинна бути кратна ---24---*/}
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                <li><GoodsCard/></li>
                {/*<li><GoodsCard/></li>*/}
            </ul>
        </div>
    )
};