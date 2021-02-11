import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Payment from "./components/Payment";

const promise = loadStripe(
  "pk_test_51IJ2OWI7cNJrUBtwQTZmKusJdVu5n2P0JUlMrbNNdX3UCIvcDZSJH0M1dSZO0yrXTqiMwGyy9fQK1ikC1JHWMcvf000wjQR0Lc"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // Listerner to keep track who signed In
  useEffect(() => {
    // Will only run ones when the app components loads
    // onAuthStateChanged: As soon as app load in login or logout Refire the codes

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
