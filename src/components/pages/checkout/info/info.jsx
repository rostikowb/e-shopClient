import React from "react";
import s from "./info.module.css";
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../../redux/modal/actions";

const CheckoutInf = (props) => {
  return <div className={s.mainInfoBox}>s</div>;
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

export const CheckoutInfo = connect(mapStateToProps, {
  changeStateAuthModal,
})(CheckoutInf);
