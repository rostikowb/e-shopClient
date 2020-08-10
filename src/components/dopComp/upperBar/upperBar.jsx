import React from "react";
import s from "./upperBar.module.css";
import { Sort } from "./sort/sort";
import { Salt } from "./salt/salt";
import { connect } from "react-redux";

export const UpperBa = (props) => {
  return (
    <div className={s.upperBar}>
      <Salt name={props.name} />
      {!props.name ? <Sort /> : null}
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
export const UpperBar = connect(mapStateToProps, null)(UpperBa);
