import React from "react";
import s from "./commentBox.module.css";
import { NavLink } from "react-router-dom";

export const CommentBox = (props) => {
  return (
    <div className={s.commentBox}>
      <h2>Отзывы</h2>
      <div className={s.commentInBox}>
        <span>Отзывов нет 😮</span>
        <span>
          Это ваш шанс! Станьте первым и получите скидку 5% на любой товар! 😉
        </span>
        <small>
          <NavLink to=""></NavLink>подробней
        </small>
      </div>
    </div>
  );
};
