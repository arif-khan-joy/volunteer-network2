import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Volunteer from "./component/Volunteer/Volunteer";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Info from "./component/Info/Info";
import Donation from "./component/Donation/Donation";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p>Nmae:{loggedInUser.name}</p>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/info/:id">
              <Info></Info>
            </PrivateRoute>
            <Route path="/donation">
              <Donation></Donation>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
