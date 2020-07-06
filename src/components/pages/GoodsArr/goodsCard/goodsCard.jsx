import React from 'react'
import s from './goodsCard.module.css'
import {Img} from "./img/img";
import {Title} from "./title/title";
import {RatingBox} from "./rating/rating";
import {PriceBox} from "./price/price";
import {InStock} from "./inStock/inStock";
import {CardLikeBox} from "./like/cardLike";
import {CardBasketBox} from "./basket/cardBasket";

export const GoodsCard = () => {
    return (
        <div className={s.cardBox}>
            <div className={s.goodsInner}>
                <div className={s.top}>
                    <Img/>
                    <Title/>
                    <RatingBox/>
                </div>

                <div className={s.bottom}>
                    <PriceBox/>
                    <InStock/>
                </div>
            </div>
            <CardLikeBox/>
            <CardBasketBox/>
        </div>
    )
};