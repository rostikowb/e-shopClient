import React from "react";
import s from "./goodsSideBar.module.css";
import { GoodsBlock } from "./goodsBlock/goodsBlock";
import { connect } from "react-redux";

export const GoodsSideBa = (props) => {
  return (
    <div className={s.goodsArrBox}>
      <span className={s.sideBarTitle}>Вы недавно смотрели</span>
      <div className={s.goodsArrInBox}>
        {props.arr
          ? props.arr.map((item) => <GoodsBlock key={item._id} data={item} />)
          : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    arr: state.oneGoods.visitedArr,
  };
};

export const GoodsSideBar = connect(mapStateToProps, null)(GoodsSideBa);
