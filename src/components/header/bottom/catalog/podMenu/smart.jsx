import React from "react";
import { option } from "../../../../../option";
import { NavLink } from "react-router-dom";
import { Acordeon } from "../../../../dopComp/acardeon/acardeon";

export const Smart = (props) => {
  const loadGoods = props.modal;
  let opt = option;
  return (
    <ul>
      <li onClick={() => loadGoods(opt.goods[0].value)}>
        <NavLink to={"/" + opt.goods[0].value}>{opt.goods[0].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[1].value)}>
        <NavLink to={"/" + opt.goods[1].value}>{opt.goods[1].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[2].value)}>
        <NavLink to={"/" + opt.goods[2].value}>{opt.goods[2].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[3].value)}>
        <NavLink to={"/" + opt.goods[3].value}>{opt.goods[3].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[4].value)}>
        <NavLink to={"/" + opt.goods[4].value}>{opt.goods[4].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[5].value)}>
        <NavLink to={"/" + opt.goods[5].value}>{opt.goods[5].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[6].value)}>
        <NavLink to={"/" + opt.goods[6].value}>{opt.goods[6].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[7].value)}>
        <NavLink to={"/" + opt.goods[7].value}>{opt.goods[7].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[8].value)}>
        <NavLink to={"/" + opt.goods[8].value}>{opt.goods[8].label}</NavLink>
      </li>
    </ul>
  );
};
