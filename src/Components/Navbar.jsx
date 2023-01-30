import React from 'react'

const navbar = () => {
  return (
    <nav>
        <ul id="left">
            <li><a>Shopify</a></li>
        </ul>
        <ul id="right">
            <li><a href="">
            <span id="shoppingCart"><i class="fas fa-cart-plus"></i><span id="cartCount">0</span></span>
            </a></li>
        </ul>
    </nav>
  )
}

export default navbar