import React from "react";
import { connect } from "react-redux";
import s from "./bottom.module.css";
import MenuBtn from "./menu/menu";
import Logo from "./logo/logo";
import CatalogBtn from "./catalog/catalogBtn/catalogBtn";
import Search from "./searchInput/search";
import Actions from "./actions/actions";
import { CatalogModal } from "./catalog/catalogModal/catalogModal";
import { changeStateCatalogModal } from "../../../redux/modal/actions";

export const Bottom = connect(null, {
  changeStateCatalogModal,
})((isActive) => {
  // console.log(navigator.userAgent);
  return (
    <div className={s.headerBottom}>
      <MenuBtn />
      <Logo />
      <CatalogBtn />
      <Search />
      <Actions />
      {isActive ? <CatalogModal /> : null}
    </div>
  );
});
