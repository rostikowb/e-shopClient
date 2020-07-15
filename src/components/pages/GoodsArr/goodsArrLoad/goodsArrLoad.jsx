import React from "react";
import { connect } from "react-redux";
import s from "../goodsArr.module.css";
import { GoodsCard } from "../goodsCard/goodsCard";
import { NextBtnCard } from "../nextBtnCard/nextBtnCard";

const GoodsArrLoa = (props) => {
  return (
    <>
      {/*Кількість блоків повинна бути кратна ---24---*/}
      {props.currGoods.map((value) => (
        <li className={s.goodsElem} key={value["_id"]}>
          <GoodsCard data={value} />
        </li>
      ))}
      {!props.stub ? <NextBtnCard /> : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    catalog: state.AllGoodsR.catalog,
    stub: state.AllGoodsR.stub,
  };
};

export const GoodsArrLoad = connect(mapStateToProps, {})(GoodsArrLoa);
