import React from "react";
import s from "./form.module.css";
import { connect } from "react-redux";
import { ModalAuth } from "../../../header/top/auth/loginModal/modal";
import { changeStateAuthModal } from "../../../../redux/modal/actions";

const CheckoutFor = (props) => {
  let auMo = props.changeStateAuthModal;
  return (
    <div className={s.formBox}>
      {!props.token ? (
        <>
          <ModalAuth />
          <span onClick={() => auMo()} className={s.isAuthMsg}>
            У меня есть аккаунт и я хочу авторизироватся что бы не вводить все
            эти поля!
          </span>
        </>
      ) : null}

      <div className={s.form}></div>
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
  };
};

export const CheckoutForm = connect(mapStateToProps, {
  changeStateAuthModal,
})(CheckoutFor);
