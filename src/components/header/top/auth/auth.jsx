import { connect } from "react-redux";
import React from "react";
import ModalLogin from "./loginModal/modal.jsx";
import s from "./auth.module.css";
import { changeStateAuthModal } from "../../../../redux/modal/actions";

export default connect(null, { changeStateAuthModal })((props) => {
  return (
    <div>
      <span onClick={() => props.changeStateAuthModal()} className={s.authBtn}>
        Войти в свою учетную запись
      </span>
      <ModalLogin />
    </div>
  );
});
