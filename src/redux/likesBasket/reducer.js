import {
  ADD_LIKES,
  ADD_BASKET,
  DEL_LIKES,
  DEL_BASKET,
  SUM_BASKET,
} from "../types";
import { set, get, contains } from "../../localStorage/localStorFunc";

const addArr = (state, value) => {
  if (!contains(state, value)) {
    value.countSale = 1;
    return [...state, value];
  } else {
    return state;
  }
};

const delArr = (state, value) => {
  let index = contains(state, value, true);
  if (index !== false) state.splice(index, 1);
  return [...state];
};

const sumArr = (state, value, plus) => {
  let index = contains(state, value, true);

  if (plus) {
    state[index].countSale++;
  } else {
    if (state[index].countSale > 1) state[index].countSale--;
  }
  return [...state];
};

const sumArrDo = (state) => {
  let count = 0;

  state.forEach((item) => {
    const discount = Math.round(
      item["rtlPrc"] - (item["rtlPrc"] / 100) * item["dscnt"]
    );
    count += discount * item.countSale;
  });
  return count;
};

const initialState = {
  likesArr: get("goods/likes"),
  basketArr: get("goods/basket"),
  basketSum: sumArrDo(get("goods/basket")) || 0,
};

export const addLikesBasket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKES:
      if (!state.likesArr) state.likesArr = get("goods/likes");
      state.likesArr = addArr(state.likesArr, action.payload);
      set("goods/likes", state.likesArr);
      return { ...state };

    case ADD_BASKET:
      if (!state.basketArr) state.basketArr = get("goods/basket");
      state.basketArr = addArr(state.basketArr, action.payload);
      state.basketSum = sumArrDo(state.basketArr);
      set("goods/basket", state.basketArr);
      return { ...state };

    case DEL_LIKES:
      if (!state.likesArr) state.likesArr = get("goods/likes");
      state.likesArr = delArr(state.likesArr, action.payload);
      set("goods/likes", state.likesArr);
      return { ...state };

    case DEL_BASKET:
      if (!state.basketArr) state.basketArr = get("goods/basket");
      state.basketArr = delArr(state.basketArr, action.payload);
      state.basketSum = sumArrDo(state.basketArr);
      set("goods/basket", state.basketArr);
      return { ...state };

    case SUM_BASKET:
      if (!state.basketArr) state.basketArr = get("goods/basket");
      state.basketArr = sumArr(state.basketArr, action.payload, action.plus);
      state.basketSum = sumArrDo(state.basketArr);
      set("goods/basket", state.basketArr);
      return { ...state };
    default:
      return state;
  }
};
