import s from "./price.module.css";
import React from "react";
import option from "../../../../../option";

export const PriceBox = (props) => {
  const price = props.price * 1.5;
  const interest = option.interest;
  const discount = Math.round(price - (price / 100) * interest);

  return (
    <div className={s.priceBox}>
      <span className={s.oldPrice}>{price}₴</span>
      <span className={s.newPrice}>{discount}₴</span>
    </div>
  );
};
