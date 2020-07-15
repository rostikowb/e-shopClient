import React, { useEffect } from "react";
import s from "./upperBar.module.css";
import { Sort } from "./sort/sort";
import { Salt } from "./salt/salt";
import { connect } from "react-redux";
import { fetchGoods, stubOn, thisUrl } from "../../../redux/goodsArr/actions";
// import { FETCH_GOODS, STUB_ON } from "../../../redux/types";

export const UpperBar = (props) => {
  // const loadGoods = () => {
  //   // props.stubOn({ type: STUB_ON });
  //   props.fetchGoods({ type: FETCH_GOODS });
  // };

  return (
    <div className={s.upperBar}>
      <Salt name={props.name} />
      <Sort />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     currGoods: state.AllGoodsR.currGoods,
//     stub: state.AllGoodsR.stub,
//   };
// };

// export const UpperBar = connect(mapStateToProps, {
//   fetchGoods,
//   stubOn,
// })(UpperBa);
