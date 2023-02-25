import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext.jsx";
import Header from "./Header";
import { CartContext } from "../Global/CartContext";

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  
  return (
    <div className="container">
    <Header />
    <br />
    <br />
    <div id="head"> TRENDING HOTS </div>
    <br />
    <div id="products">
        {products.map((product) => (
          <div id="product" key={product.id}>
            <div id="pro_img">
              <img src={product.image} alt="not found" />
            </div>
            <div id="pro_details">
              <div id="pro_name">{product.name}</div>
              <div id="pro_price">Rs. {product.price} /-</div>
            </div>

            <div id="add_to_cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product})}>Add to Cart</div>
            {products.status === "hot" ? <div className="hot"></div> : ""}
            {products.status === "new" ? <div clasName="new"></div> : ""}
          </div>
      ))}
    </div>
    </div>
  );
};

export default Product;
