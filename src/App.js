import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import "./style.css";
import Header from "./components/header/header";
import { GoodsArr } from "./components/pages/GoodsArr/goodsArr";
import Sidebar from "./components/sidebar/sidebar";
import page404 from "./components/statusCodePages/404/404";
import page500 from "./components/statusCodePages/500/500";
import loader from "./assets/img/loader.gif";
import { config } from "react-transition-group";
import { Goods } from "./components/pages/goods/goods";
import { GoodsSideBar } from "./components/dopComp/goodsSideBar/goodsSideBar";
import { initLocalStorage } from "./localStorage/localStorFunc";
// import {MainTop} from "./components/pages/GoodsArr/sortBar/sortBar";
// import Switch from "react-router-dom/es/Switch";

// const AddNewsPage = React.lazy(() => import('./components/adminPanel/addNews/addNewsPage/addNewsPage'));
// const AdminPanel = React.lazy(() =>
//   import("./components/adminPanel/adminPanel")
// );
const ContactPage = React.lazy(() =>
  import("./components/informPage/contacts/contacts")
);
const StatutPage = React.lazy(() =>
  import("./components/informPage/statut/statut")
);

config.disabled = false;

class App extends Component {
  constructor(props) {
    super(props);
    initLocalStorage();
  }
  state = {
    AddNewsPage: null,
  };

  // componentDidMount() {
  //
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Suspense
            fallback={
              <div className="suspense">
                <img className="loader" src={loader} alt="loader" />
              </div>
            }
          >
            <Header />
            <div className="main">
              <div className="leftSidebarBox">
                <Sidebar />
              </div>

              <div className="rightMain">
                <Switch>
                  <Route
                    exact
                    path="/:catalog/:product/500"
                    component={page500}
                  />
                  <Route exact path="/" component={GoodsArr} />
                  <Route exact path="/:catalog" component={GoodsArr} />
                  <Route exact path="/:catalog/:product" component={Goods} />
                  {/*<Route exact path="/news" component={Content}/>*/}
                  {/*<Route exact path="/contact" component={ContactPage} />*/}
                  {/*<Route exact path="/statut" component={StatutPage} />*/}
                  {/*<Route exact path="/ap" component={AdminPanel} />*/}
                  {/*<Route exact path="/addNews" component={AddNewsPage}/>*/}

                  {/*<Route exact path="/" component={Content}/>*/}
                  <Route exact component={page404} />
                </Switch>
              </div>
            </div>

            <GoodsSideBar />
            {/*<Footer func={this.handleClick}/>*/}
          </React.Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
