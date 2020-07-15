import React from "react";
import s from "./img.module.css";
// import img1 from "./1.jpg";
// import img2 from "./2.jpg";
import { Link, NavLink } from "react-router-dom";

export const Img = (props) => {
  let styleImg1 = {
    display: "",
  };
  let styleImg2 = {
    display: "",
  };
  if (props.data?.img.length < 2) {
    styleImg1.display = "block";
    styleImg2.display = "none";
  }

  return (
    <div>
      <Link
        className={s.imgBox}
        to={props.data.catalog + "/" + props.data.link}
      >
        <img
          style={styleImg1}
          className={s.imgOne}
          src={props.data?.img[0]}
          alt=""
        />
        <img
          style={styleImg2}
          className={s.imgTwo}
          src={props.data?.img[1]}
          alt=""
        />
      </Link>
    </div>
  );
};
