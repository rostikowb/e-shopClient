import { PRODUCT } from "../types";
import bent from "bent";

export const fetchOneGoods = (props) => {
  let url = "http://192.168.1.106:3001/goods/" + props;

  return async (dispatch) => {
    const res = await bent(url, "string", "POST", 200)();

    let dispatchObj = {
      type: PRODUCT,
      payload: JSON.parse(res),
    };
    dispatch(dispatchObj);
  };
};
