import React, { useState } from "react";
import s from "./basketModal.module.css";
import ss from "../../../../pages/GoodsArr/goodsCard/basket/cardBasket.module.css";
import { connect } from "react-redux";
import { changeStateBasketModal } from "../../../../../redux/modal/actions";
import { BasketCart } from "./basket/basketCard";

export const BasketModa = (props) => {
  let mdl = props.basket;
  let arr = props.basketArr;

  return mdl ? (
    <div>
      <div
        onClick={() => props.changeStateBasketModal()}
        className={s.modal_basked_box}
      />
      <div className={s.modal_basked}>
        <h2 className={s.title}>Корзина</h2>
        <ul className={s.baskedBoxIn}>
          {arr?.length ? (
            arr.map((item, index) => (
              <li key={item._id + "basketCard"}>
                <BasketCart data={item} index={index} />
              </li>
            ))
          ) : (
            <span className={s.emptyMsg}>
              Ваша корзина покупок <b>&nbsp;пустая!&nbsp;</b>
            </span>
          )}
        </ul>
        {arr?.length ? (
          <div className={s.suma}>
            <span className={s.sumaText}>
              В суме: <span>{props.basketSum.toLocaleString("ru-RU")}</span>
            </span>
            <span className={s.sumaBtn + " " + ss.cardBoxAll}>
              Пройти на касу!
            </span>
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    basket: state.modal.basket,
    basketArr: state.addLikesBasket.basketArr,
    basketSum: state.addLikesBasket.basketSum,
  };
};

export const BasketModal = connect(mapStateToProps, {
  changeStateBasketModal,
})(BasketModa);
