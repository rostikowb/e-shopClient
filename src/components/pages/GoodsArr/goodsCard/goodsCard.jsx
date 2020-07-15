import React from "react";
import LazyLoad from "react-lazyload";
import Paper from "@material-ui/core/es/Paper/Paper";
import s from "./goodsCard.module.css";
import { Img } from "./img/img";
import { Title } from "./title/title";
import { RatingBox } from "./rating/rating";
import { PriceBox } from "./price/price";
import { InStock } from "./inStock/inStock";
import { CardLikeBox } from "./like/cardLike";
import { CardBasketBox } from "./basket/cardBasket";
import { ShortHaractBox } from "./shortHaract/shortHaract";

export const GoodsCard = (props) => {
  // console.log(props.data['stck_qntt'] > 5);
  // console.log(props.data);
  let link = props.data._id + "__" + props.data["nm"].replace(/\s/gi, "_");
  return (
    <Paper className={s.cardBox} elevation={3}>
      <div className={s.goodsInner}>
        <div className={s.top}>
          <LazyLoad once height={200} offset={100}>
            <Img
              data={{
                img: props.data.img,
                link: link,
                catalog: props.data["ctgrId"],
              }}
            />
          </LazyLoad>
          <Title
            data={{
              title: props.data["nm"],
              link: link,
              catalog: props.data["ctgrId"],
            }}
          />
          <RatingBox />
        </div>

        <div className={s.bottom}>
          <PriceBox price={props.data["prc"]} />
          <InStock stock={props.data["stck_qntt"]} />
        </div>
        <div className={s.underInfo}>
          <ShortHaractBox id={props.data._id} param={props.data["prm"]} />
        </div>
        {props.data["stck_qntt"] > 3 ? null : <div className={s.notAval} />}
      </div>
      <CardLikeBox />
      {props.data["stck_qntt"] > 3 ? <CardBasketBox /> : null}
    </Paper>
  );
};
