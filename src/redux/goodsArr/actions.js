import {
  FETCH_GOODS,
  FETCH_GOODS_PAGES,
  SET_CATALOG,
  STUB_ON,
  THIS_URL,
} from "../types";
import bent from "bent";

export const stubOn = () => {
  return {
    type: STUB_ON,
  };
};

export const thisUrl = (url) => {
  console.log(url);
  return {
    type: THIS_URL,
    url: url,
  };
};

export const setCatalog = (catalog) => {
  return {
    type: SET_CATALOG,
    catalog: catalog,
  };
};

let oldUrl;

export const fetchGoods = (props) => {
  console.log(props.catalog);
  let cat;
  // if (props.catalog !== "clear") {
  cat = props.catalog ? "/" + props.catalog : "/";
  // } else {
  //   cat = "/";
  // }
  console.log(cat);
  let page = props.page;
  let sort = props.sort ? props.sort : null;
  let url =
    "http://192.168.1.106:3001" + cat + "?page=" + page + "&sort=" + sort;
  let isFetch;

  // if (oldUrl !== url) {
  oldUrl = url;
  return async (dispatch) => {
    isFetch = !page ? FETCH_GOODS : FETCH_GOODS_PAGES;
    const res = await bent(url, "string", "POST", 200)();

    let dispatchObj = {
      type: isFetch,
      catalog: props.catalog,
      payload: JSON.parse(res),
    };

    if (sort) dispatchObj.sort = sort;
    dispatch(dispatchObj);
  };
  // } else {
  //   return async (dispatch) => {
  //     dispatch({ type: THIS_URL });
  //   };
  // }
};
