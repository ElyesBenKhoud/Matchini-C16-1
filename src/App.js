import React from "react";
// import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Commercial from "./components/Commercial";
// import CreateGame from "./components/CardsChoice/CreateGame";
// import CreatePlayer from "./components/CardsChoice/CreatePlayer";
import CommercialSec from "./components/CommercialSec";
import CommercialThird from "./components/CommercialThird";
// 215341427022-qpsrq4730unqiq2v0e0eci2valevqr1b.apps.googleusercontent.com
const App = () => {
  return (
    <div className="bg-gray-100">
      <Home />

      <Router>
        <Switch>
          <Route path="/Register" exact>
            <Register />
          </Route>
          <Route path="/Login" exact>
            <Login />
          </Route>

          <Route path="/LandingPage" exact>
            <LandingPage />
          </Route>
          <Route path="/commercial" exact>
            <Commercial />
          </Route>
          <Route path="/commercialsec" exact>
            <CommercialSec />
          </Route>
          <Route path="/commercialthird" exact>
            <CommercialThird />
          </Route>
          {/* <Route path="/creategame" exact>
            <CreateGame />
          </Route>
          <Route path="/createplayer" exact>
            <CreatePlayer />
          </Route> */}

          <LandingPage />
          <Footer />
        </Switch>
      </Router>
    </div>
    // </div>
  );
};

export default App;
