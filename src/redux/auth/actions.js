import { AUTH_API, AUTH_EXIT, AUTH_STUB, FORM_CHANGE } from "../types";
import bent from "bent";
import { option } from "../../option";

export const changeIsForm = (form) => {
  return (dispatch) => {
    dispatch({
      type: FORM_CHANGE,
      form: form,
    });
  };
};

export const authStubOn = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_STUB,
    });
  };
};
export const authExit = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_EXIT,
    });
  };
};
export const authSendApi = (type, data) => {
  return async (dispatch) => {
    const res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )("/users/" + type, {
      nick: data.name,
      email: data.email,
      pass: data.pass,
    });
    console.log(res);
    dispatch({
      type: AUTH_API,
      payload: res,
      userData: res.userData,
    });
  };
};
