import React, { useEffect } from "react";
import s from "./goods.module.css";
// import cyrillicToTranslit from "cyrillic-to-translit-js";
import { UpperBar } from "../../dopComp/upperBar/upperBar";
import { connect } from "react-redux";
// import { fetchGoods, stubOn, thisUrl } from "../../../redux/actions";
import { useLocation, useParams } from "react-router";
import { FETCH_GOODS, STUB_ON } from "../../../redux/types";
import { fetchOneGoods } from "../../../redux/oneGoods/action";
import { setCatalog } from "../../../redux/goodsArr/actions";

// console.log(cyrillicToTranslit().transform("Привет Мир!"));

function useLoc() {
  return {
    query: new URLSearchParams(useLocation().search),
    path: useParams(),
  };
}

const Good = (props) => {
  let loc = useLoc().path;
  let catalog = loc.catalog;
  let productId = loc.product.split("__")[0];
  let productLabel = loc.product.split("__")[1].replace(/_/gi, " ");

  // console.log(productLabel);
  const loadOneGoods = () => {
    props.setCatalog(catalog);
    props.fetchOneGoods(productId);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    loadOneGoods();
  }, []);
  return (
    <div className={s.goodsBox}>
      <UpperBar name={productLabel} />
      <div>sss</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.oneGoods.product,
  };
};

export const Goods = connect(mapStateToProps, {
  fetchOneGoods,
  setCatalog,
  // stubOn,
})(Good);
