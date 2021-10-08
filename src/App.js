import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/view-product/:id" component={ViewProduct} />
        <Route path="/view-cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />

        {/* Error 404 - Page Not Found */}
        {/* <Route path="*" component={Error404} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
