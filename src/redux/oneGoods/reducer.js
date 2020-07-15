import { PRODUCT } from "../types";

const initialState = {
  product: null,
};

export const oneGoods = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT:
      state.product = action.dispatch;
      return { ...state };

    default:
      return state;
  }
};
