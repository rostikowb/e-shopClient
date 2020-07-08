import React from 'react'
import s from './goodsCard.module.css'
import {Img} from "./img/img";
import {Title} from "./title/title";
import {RatingBox} from "./rating/rating";
import {PriceBox} from "./price/price";
import {InStock} from "./inStock/inStock";
import {CardLikeBox} from "./like/cardLike";
import {CardBasketBox} from "./basket/cardBasket";
import {ShortHaractBox} from "./shortHaract/shortHaract";
import Paper from "@material-ui/core/es/Paper/Paper";

export const GoodsCard = () => {

    // const data = {
    //     title: 'Bluetooh наушники Hoco ES36 Original series White',
    //     imgUrl: [
    //         'https://axus.com.ua/image/cache/catalog/img/Hoco/besprovodnye-naushniki-hoco-es36-74x74.jpg',
    //         'https://axus.com.ua/image/cache/catalog/img/Hoco/hoco-es36-white-tws-74x74.jpg'
    //     ],
    //     shortCharact: [
    //         - 'Bluetoth версии: V5.0'
    //
    // -'Тип: True Wireless Stereo'
    //
    // - 'Максимальный радиус действия:  10 м'
    //
    // - 'Диапазон частот: 20–20 000 Гц'
    //
    // - 'Время работы без подзарядки: 3 часа'
    //
    // - 'Время зарядки: 1 час'
    //     ]
    // };

    // console.log(data.shortCharact);

    return (
        <Paper className={s.cardBox} elevation={3}>
            {/*<div >*/}

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
                    <div className={s.underInfo}>
                        <ShortHaractBox/>
                    </div>
                </div>
                <CardLikeBox/>
                <CardBasketBox/>
            {/*</div>*/}
        </Paper>
    )
};