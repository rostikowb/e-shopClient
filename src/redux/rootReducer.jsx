import { combineReducers } from "redux";
import modal from "./modal/reducer";
import { AllGoodsR } from "./goodsArr/AllGoodsReducer";
import { oneGoods } from "./oneGoods/reducer";

export default combineReducers({
  modal,
  oneGoods,
  AllGoodsR,
});
