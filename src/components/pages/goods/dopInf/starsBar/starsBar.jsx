import React from "react";
import s from "./starsBar.module.css";
import { Rating } from "@material-ui/lab/es";

export const StarsBar = (props) => {
  return (
    <div className={s.ratingBox}>
      <Rating name="read-only" value={4} size={"large"} readOnly />
      <a> - 2 оценивших</a>
    </div>
  );
};
