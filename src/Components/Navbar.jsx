import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

const Navbar = () => {
  const {qty} = useContext(CartContext);
  return (
    <nav>
        <ul id="left">
            <li><Link to="/">SHOPIZARD</Link></li>
        </ul>
        <ul id="right">
            <li><Link to="cart">
            <span id="shoppingCart"><i class="fas fa-cart-plus"></i><span id="cartCount">{qty}</span></span>
            </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar