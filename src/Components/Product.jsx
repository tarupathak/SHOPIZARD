import React, { useContext } from "react";
import { ProductsContext } from "../Global/Products.jsx";
import Header from "./Header";

const Product = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="container">
    <Header />
    <div id="products">
      {products.map((product) => (
        <div id="product" key={product.id}>
          <div id="product_img">
            <img src={product.image} alt="not found" />
          </div>
          <div id="prouct_details">
            <div id="product_name">{product.name}</div>
            <div id="product_price">${product.price}.00</div>
          </div>
          <div id="add_cart">Add to cart</div>
          {product.status == 'hot'? <div className="hot"></div>: ''}
          {product.status == 'new'? <div className="new"></div>: ''}
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default Product;
