import s from "./cardLike.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/index";

export const CardLikeBox = () => {
  return (
    <div className={s.likeBox}>
      <FontAwesomeIcon
        className={s.icon}
        title="Добавить товар в избранное/понравившееся."
        icon={faHeart}
      />
    </div>
  );
};
