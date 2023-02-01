import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav>
        <ul id="left">
            <li><Link to="/">Shopify</Link></li>
        </ul>
        <ul id="right">
            <li><Link to="cart">
            <span id="shoppingCart"><i class="fas fa-cart-plus"></i><span id="cartCount">0</span></span>
            </Link></li>
        </ul>
    </nav>
  )
}

export default navbar