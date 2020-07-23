import { PRODUCT, SET_IMG } from "../types";
import bent from "bent";

export const imgOnShowSet = (img) => {
  return { type: SET_IMG, img: img };
};

export const fetchOneGoods = (urlId, isLoad = true, data) => {
  let url = "http://192.168.1.106:3001/goods/" + urlId;

  return async (dispatch) => {
    let res = isLoad
      ? JSON.parse(await bent(url, "string", "POST", 200)())
      : data;

    let dispatchObj = {
      type: PRODUCT,
      payload: res,
    };
    dispatch(dispatchObj);
  };
};
