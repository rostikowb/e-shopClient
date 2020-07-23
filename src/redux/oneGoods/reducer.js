import { set, get, contains } from "../../localStorage/localStorFunc";
import { PRODUCT, SET_IMG } from "../types";

const addVisitedArr = (state, value) => {
  if (!contains(state, value)) {
    if (state.length > 6) {
      state.shift();
      return [...state, value];
    } else {
      return [...state, value];
    }
  } else {
    return state;
  }
};

const initialState = {
  product: null,
  imgOnShow: null,
  visitedArr: get("goods/visited"),
};

export const oneGoods = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT:
      if (!state.visitedArr) state.visitedArr = get("goods/visited");
      state.product = action.payload;
      state.imgOnShow = action.payload.img[0];
      state.visitedArr = addVisitedArr(state.visitedArr, action.payload);
      set("goods/visited", state.visitedArr);
      return { ...state };

    case SET_IMG:
      if (state.imgOnShow !== action.img) state.imgOnShow = action.img;
      return { ...state };

    default:
      return state;
  }
};
