import { LOGIN_TO_REG } from "../types";

export const changeIsLogin = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_TO_REG,
    });
  };
};
