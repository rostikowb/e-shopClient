import React, { useEffect } from "react";
import s from "./goodsArr.module.css";
import { UpperBar } from "../../dopComp/upperBar/upperBar";
import { connect } from "react-redux";
import { fetchGoods, stubOn, thisUrl } from "../../../redux/goodsArr/actions";
import { FETCH_GOODS, STUB_ON, THIS_URL } from "../../../redux/types";
import { StubArr } from "./stubArr/stubArr";
import { GoodsArrLoad } from "./goodsArrLoad/goodsArrLoad";
import { useLocation, useParams } from "react-router";
import option from "../../../option";

function useLoc() {
  return {
    query: new URLSearchParams(useLocation().search),
    path: useParams().catalog,
  };
}

const GoodsAr = (props) => {
  let location = useLoc();
  let page = Number(location.query.get("page"));
  let sort = location.query.get("sort");
  let path = useLoc().path;
  console.log(path);
  // console.log(sort);
  const firstLoad = () => {
    props.stubOn({ type: STUB_ON });
    props.fetchGoods({
      type: FETCH_GOODS,
      catalog: path,
      sort: sort,
      page: page,
    });
  };
  // const firstLoad = () => {
  //     props.stubOn({ type: STUB_ON });
  //     props.fetchGoods({
  //         type: FETCH_GOODS,
  //         catalog: path,
  //         sort: sort || props.sort,
  //         page: page || props.page,
  //     });
  // };

  const changeUrl = () => {
    props.thisUrl({
      type: THIS_URL,
      url: path,
    });
  };
  // if (props.url !== path) {
  //   changeUrl();
  //   loadGoods();
  // }
  useEffect(() => {
    if (props.isFirstL) firstLoad();
  }, []);

  return (
    <div className={s.goodsArr}>
      <UpperBar />
      <ul className={s.goodsBox}>
        {/*Підгружені карточки товару*/}
        <GoodsArrLoad />

        {/*Заглушка*/}
        {props.stub ? <StubArr /> : null}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    isFirstL: state.AllGoodsR.isFirstL,
    catalog: state.AllGoodsR.catalog,
    sort: state.AllGoodsR.sort,
    stub: state.AllGoodsR.stub,
    url: state.AllGoodsR.url,
  };
};

export const GoodsArr = connect(mapStateToProps, {
  fetchGoods,
  thisUrl,
  stubOn,
})(GoodsAr);
