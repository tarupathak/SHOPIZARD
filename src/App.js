import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Products from "../src/Global/Products";
import Product from "../src/Components/Product";
import Cart from "../src/Components/Cart"
import NotFound from '../src/Components/NotFound'

const App = () => {
  return (
    <div>
     <Products>
     <BrowserRouter>
     <Navbar />
      <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        <Route component={NotFound} />
      </Switch>
     </BrowserRouter>
      
     
      </Products>
    </div>
  );
};

export default App;
