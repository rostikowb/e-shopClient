import { connect } from "react-redux";
import React from "react";
import { ModalAuth } from "./loginModal/modal.jsx";
import s from "./auth.module.css";
import { changeStateAuthModal } from "../../../../redux/modal/actions";
import { authExit } from "../../../../redux/auth/actions";

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.userData,
  };
};

export default connect(mapStateToProps, { changeStateAuthModal, authExit })(
  (props) => {
    let nick = props.user.nick;
    return (
      <div>
        {!props.token ? (
          <>
            <span
              onClick={() => props.changeStateAuthModal()}
              className={s.authBtn}
            >
              Войти в свою учетную запись
            </span>
            <ModalAuth />
          </>
        ) : (
          <span>
            Привет {nick ? nick : "Аноним"}!{" "}
            <span className={s.exitBtn} onClick={() => props.authExit()}>
              Выход
            </span>
          </span>
        )}
      </div>
    );
  }
);
