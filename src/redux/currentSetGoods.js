import { GOODSARR } from "./types";

const initialState = {
  isActiveModal: false,
};

export const currSetGoodsR = (state = initialState, action) => {
  switch (action.type) {
    case GOODSARR:
      return { ...state, isActiveModal: !state.isActiveModal };
    default:
      return state;
  }
};
