import React from "react";
import s from "./title.module.css";
import { NavLink } from "react-router-dom";

export const Title = (props) => {
  // console.log(props.data.catalog);
  return (
    <div className={s.title}>
      <NavLink to={props.data.catalog + "/" + props.data.link}>
        <h3>{props.data.title} </h3>
      </NavLink>
    </div>
  );
};
