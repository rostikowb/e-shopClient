import React from "react";
import s from "./basketCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { DEL_BASKET } from "../../../../../../redux/types";
import {
  delProdToCash,
  sumProdToCash,
} from "../../../../../../redux/likesBasket/actions";
import { NavLink } from "react-router-dom";
import { changeStateBasketModal } from "../../../../../../redux/modal/actions";
import { fetchOneGoods } from "../../../../../../redux/oneGoods/action";
import { setCatalog } from "../../../../../../redux/goodsArr/actions";
import { useHistory } from "react-router";
import { option } from "../../../../../../option";

const BasketCar = (props) => {
  let d = props.data;
  let count = props.basketArr[props.index].countSale;
  let loc = useHistory().location.pathname.split("__")[0].split("/")[2];
  let link = d._id + "__" + d["nm"].replace(/\s/gi, "_").replace(/\//gi, "-");

  const price = d["rtlPrc"];
  const mainPrice = Math.round(Number(price)).toLocaleString("ru-RU");
  const interest = d["dscnt"];

  let discount;
  if (interest) {
    discount = Math.round(
      Number(price) + (price / 100) * interest
    ).toLocaleString("ru-RU");
  }

  const loadOneGoods = () => {
    if (d._id !== loc) {
      props.setCatalog(d["ctgrId"]);
      props.fetchOneGoods(d["_id"], false, d);
    }
    props.changeStateBasketModal();
  };

  const remove = (type) => {
    props.delProdToCash(type, d);
  };

  return (
    <div className={s.cardBox}>
      <div className={s.topPart}>
        <NavLink to={`/${d["ctgrId"]}/${link}`}>
          <span onClick={() => loadOneGoods()} className={s.name}>
            {d.nm}
          </span>
        </NavLink>
      </div>
      <div className={s.bottomPart}>
        <div onClick={() => loadOneGoods()} className={s.imgBox}>
          <NavLink to={`/${d["ctgrId"]}/${link}`}>
            <picture style={{ width: "100%" }}>
              <source
                className={s.imgOne}
                type="image/webp"
                srcSet={`${option.STATIC}/webp/${d._id}/${d.img[0]}-400.webp`}
              />
              <source
                className={s.imgOne}
                type="image/jpeg"
                srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
              />
              <img
                className={s.imgOne}
                src={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
                alt={"Фото " + d.nm}
              />
            </picture>
          </NavLink>
        </div>
        <div className={s.rightRight}>
          <div className={s.leftBox}>
            <div className={s.NamePrice}>
              <NavLink className={s.namePc} to={`/${d["ctgrId"]}/${link}`}>
                <span onClick={() => loadOneGoods()} className={s.name}>
                  {d.nm}
                </span>
              </NavLink>
              <div className={s.priceBox}>
                {interest ? (
                  <>
                    <span className={s.oldPrice}>
                      {price.toLocaleString("ru-RU")}₴
                    </span>
                    <span className={s.newPrice}>{discount}₴</span>
                  </>
                ) : (
                  <span className={s.price}>{mainPrice}₴</span>
                )}
              </div>
            </div>
          </div>
          <div className={s.rightBox}>
            <div className={s.count}>
              <div
                onClick={() => props.sumProdToCash(d, false)}
                className={s.countBtn}
              >
                -
              </div>
              <span className={s.isCount}>{count}</span>
              <div
                onClick={() => props.sumProdToCash(d, true)}
                className={s.countBtn}
              >
                +
              </div>
            </div>
            <div
              onClick={() => remove(DEL_BASKET)}
              className={s.delBtn}
              title="Выкинуть из корзины"
            >
              <FontAwesomeIcon className={s.icon} icon={faTrash} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    basket: state.modal.basket,
    basketArr: state.addLikesBasket.basketArr,
  };
};

export const BasketCart = connect(mapStateToProps, {
  delProdToCash,
  sumProdToCash,
  changeStateBasketModal,
  fetchOneGoods,
  setCatalog,
})(BasketCar);
