import React from "react";
import { connect } from "react-redux";
import { Login } from "../../../../dopComp/loginForm/login.jsx";
import s from "./modal.module.css";
import { changeStateAuthModal } from "../../../../../redux/modal/actions";

const mapStateToProps = (state) => {
  return { isActive: state.modal.auth };
};

export default connect(mapStateToProps, { changeStateAuthModal })(
  (isActive) => {
    return isActive.isActive ? (
      <div>
        <div
          onClick={() => isActive.changeStateAuthModal()}
          className={s.modal_login_box}
        />
        <div className={s.modal_login}>
          <Login />
        </div>
      </div>
    ) : null;
  }
);
