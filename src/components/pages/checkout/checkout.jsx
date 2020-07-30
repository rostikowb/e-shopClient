import React from "react";
import s from "./checkout.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../redux/modal/actions";
import { CheckoutForm } from "./form/form";
import { CheckoutInfo } from "./info/info";

const Checkou = (props) => {
  return (
    <div className={`main ${s.wrapper}`}>
      <div className={s.header}>
        <NavLink to={`/`}>Вернутся на главную</NavLink>
        <NavLink to={`/`}>Контакты</NavLink>
      </div>
      <div className={s.content}>
        <CheckoutForm />
        <CheckoutInfo />
      </div>
    </div>
  );
};

export const Checkout = connect(null, {
  changeStateAuthModal,
})(Checkou);
