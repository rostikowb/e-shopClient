import React from "react";
import s from "./info.module.css";
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../../redux/modal/actions";
import { NavLink } from "react-router-dom";

const CheckoutInf = (props) => {
  const arr = props.basketArr;
  console.log(props.basketSum);
  return (
    <div className={s.mainInfoBox}>
      <div className={s.infoInBox}>
        <div className={s.goodsBox}>
          {arr.map((g) => (
            <div key={"checkout" + g._id} className={s.goods}>
              <div className={s.left}>
                <NavLink to={`/${g["ctgrId"]}/${g._id}`} className={s.imgBox}>
                  <img src={g.img[0]} alt={`Фото ${g.nm}`} />
                </NavLink>
                <NavLink to={`/${g["ctgrId"]}/${g._id}`} className={s.title}>
                  {g.nm}
                </NavLink>
              </div>
              <div className={s.right}>
                <div className={s.count}>{g.countSale} шт.</div>
                <div className={s.price}>
                  {Math.round(
                    g["rtlPrc"] - (g["rtlPrc"] / 100) * g["dscnt"]
                  ).toLocaleString("ru-RU")}{" "}
                  грн.
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={s.infoBox}>
          <div className={s.suma}>
            <div className={s.sumaText}>Сума заказа:</div>
            <div className={s.sumaCount}>{props.basketSum.sum} грн.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    token: state.auth.token,
    isForm: state.auth.isForm,
    stub: state.auth.stub,
    invalid: state.auth.invalid,
    basketArr: state.addLikesBasket.basketArr,
    basketSum: state.addLikesBasket.basketSum,
  };
};

export const CheckoutInfo = connect(mapStateToProps, {
  changeStateAuthModal,
})(CheckoutInf);
