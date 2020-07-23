import { LOGIN_TO_REG } from "../types";

let initialState = {
  auth: false,
  isLogin: true,
  userData: {
    email: null,
    number: null,
    name: { first: null, last: null, surname: null },
    city: null,
    branchN: null,
  },
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TO_REG:
      state.isLogin = !state.isLogin;
      return { ...state };
    default:
      return state;
  }
};
