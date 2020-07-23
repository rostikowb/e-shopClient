import React from "react";
import s from "./salt.module.css";
import { NavLink } from "react-router-dom";
import { FETCH_GOODS, STUB_ON } from "../../../../redux/types";
import { connect } from "react-redux";
import { fetchGoods, stubOn } from "../../../../redux/goodsArr/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons/index";
import opt from "../../../../option";

export const Sal = (props) => {
  // console.log(props.catalog);
  let catalogLabel = props.catalog
    ? opt.goods.find((e) => e.value === props.catalog.toString()).label
    : null;

  const mainPage = () => {
    props.stubOn({ type: STUB_ON });
    props.fetchGoods({ type: FETCH_GOODS, catalog: null, sort: props.sort });
  };

  const catalogPage = () => {
    props.stubOn({ type: STUB_ON });
    console.log(props.sort);
    props.fetchGoods({
      type: FETCH_GOODS,
      catalog: props.catalog,
      sort: props.sort,
    });
  };

  return (
    <div className={s.saltBox}>
      <NavLink to="/">
        <span onClick={() => mainPage()}>Главная</span>
      </NavLink>{" "}
      <FontAwesomeIcon className={s.icon} icon={faGhost} />
      <NavLink to={"/" + props.catalog}>
        <span onClick={() => catalogPage()}> {catalogLabel}</span>
      </NavLink>
      {props?.name ? (
        <>
          <FontAwesomeIcon className={s.icon} icon={faGhost} />{" "}
          <span className={s.goodsName}>{props.name} </span>
        </>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    stub: state.AllGoodsR.stub,
    catalog: state.AllGoodsR.catalog,
    sort: state.AllGoodsR.sort,
  };
};

export const Salt = connect(mapStateToProps, {
  fetchGoods,
  stubOn,
})(Sal);
