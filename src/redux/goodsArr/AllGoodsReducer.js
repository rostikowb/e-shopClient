import {
  CLEAR_CATALOG,
  FETCH_GOODS,
  FETCH_GOODS_PAGES,
  SET_CATALOG,
  STUB_ON,
  THIS_URL,
} from "../types";

const initialState = {
  isFirstL: true,
  currGoods: [],
  catalog: null,
  stub: true,
  url: "",
  sort: "random",
};

export const AllGoodsR = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOODS:
      if (action.sort) {
        state.sort = action.sort;
        console.log(action.sort);
      }
      state.isFirstL = false;
      state.currGoods = action.payload;
      state.catalog = action.catalog;
      state.stub = false;
      return { ...state };

    case FETCH_GOODS_PAGES:
      state.currGoods = [...new Set(state.currGoods.concat(action.payload))];
      state.catalog = action.catalog;
      state.stub = false;
      state.isFirstL = false;
      return { ...state };

    case CLEAR_CATALOG:
      state.currGoods = action.payload;
      state.catalog = null;
      state.isFirstL = false;
      return { ...state };

    case STUB_ON:
      state.stub = true;
      return { ...state };

    case SET_CATALOG:
      state.catalog = action.catalog;
      return { ...state };

    case THIS_URL:
      state.url = action.url;
      state.stub = false;
      state.isFirstL = false;
      return { ...state };

    default:
      return state;
  }
};
