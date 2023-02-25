import React, { createContext } from 'react'

export const CartContext = createContext();

const CartContextProvider = (props) => {
  return (
    <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider