import { AUTH_API, AUTH_EXIT, AUTH_STUB, FORM_CHANGE } from "../types";
import { get, set } from "../../localStorage/localStorFunc";

let user = get("auth/userData") || set("auth/userData", "");
let token = get("auth/token") || set("auth/token", "");

let initialState = {
  auth: false,
  isForm: "L",
  stub: false,
  invalid: false,
  token: token,
  userData: {
    nick: user?.nick,
    email: user?.email,
    number: user?.number,
    name: {
      first: user?.name?.first,
      last: user?.name?.last,
      surname: user?.name?.surname,
    },
    city: user?.city,
    branchN: user?.branchN,
  },
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGE:
      state.isForm = action.form;
      return { ...state };

    case AUTH_API:
      // console.log(action);
      if (action.payload?.invalid) state.invalid = action.payload.message;
      if (action.payload?.token && !state.token) {
        state.token = action.payload.token;
        state.userData.nick = action.userData.nick;
        state.userData.email = action.userData.email;
        set("auth/token", action.payload.token);
        set("auth/userData", state.userData);
      }
      return { ...state };

    case AUTH_STUB:
      state.auth = !state.auth;
      return { ...state };

    case AUTH_EXIT:
      state.userData = initialState.userData;
      state.token = initialState.token;
      set("auth/token", "");
      set("auth/userData", "");
      return { ...state };

    default:
      return state;
  }
};
