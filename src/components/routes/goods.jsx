import React from "react";
import Header from "../header/header";
import { GoodsSideBar } from "../dopComp/goodsSideBar/goodsSideBar";
import Sidebar from "../sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import { GoodsArr } from "../pages/GoodsArr/goodsArr";
import { Goods } from "../pages/goods/goods";

export const GoodsRoute = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="leftSidebarBox">
          <Sidebar />
        </div>
        <div className="rightMain">
          <Switch>
            <Route exact path={["/", "/:catalog"]} component={GoodsArr} />
            <Route path="/:catalog/:product" component={Goods} />
          </Switch>
        </div>
      </div>
      <GoodsSideBar />
    </>
  );
};
