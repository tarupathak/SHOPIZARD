import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import StripeCheckout from "react-stripe-checkout"

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  

  return (
    <div className="cart-container">
      <div className="cart_details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div cl
              assName="cart" key={cart.id}>
                <span className="cart_image">
                  <img src={cart.image} alt="Not Found" />
                </span>
                <span className="cart_product_name">{cart.name}</span>
                <span className="cart_product_price">{cart.price}</span>
                <span className="inc" onClick={() => dispatch({type:'INC', id: cart.id, cart})}><i className="fas fa-plus"></i></span>
                <span className="product_quantity">{cart.qty}</span>
                <span classname="dec" onClick={()=> dispatch({type:'DEC', id: cart.id, cart})}><i className="fas fa-minus"></i></span>
                <span className="product_total_price">Rs.{cart.price * cart.qty}/-</span>
                <span className="delete_product" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart})}><i className="fas fa-trash-alt"></i></span>
              </div>
            ))
          : "Sorry your cart is currently empty."}
      </div>
      {shoppingCart.length >0 ? <div className="cart_summary">
        <div className="summary">
          <h3>Cart Summary</h3>
          <div className="TotalItems">
            <div className="items">Total Items</div>
            <div className="items_count">{qty}</div>
          </div>
          <div className="total_price_section">
            <div className="just_title">Total Price</div>
            <div className="items_price">Rs.{totalPrice}/-</div>
          </div>
          <div className="stripe_section">
              <StripeCheckout stripeKry="pk_test_51MfQYFSG8ddIUAoLd8KLmytQ606jnrleIijDl3veNQst2MIgJB11dGfuF7mLlrZT2TP2GKqV97F5vVszdFmqXnPG00oZisiQkB">

              </StripeCheckout>
          </div>
        </div>
      </div> : ''}
    </div>
  );
};

export default Cart;
