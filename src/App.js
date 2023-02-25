import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import Product from "../src/Components/Product";
import Cart from "../src/Components/Cart";
import NotFound from "../src/Components/NotFound";
import CartContextProvider from "./Global/CartContext";

const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Product} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;
