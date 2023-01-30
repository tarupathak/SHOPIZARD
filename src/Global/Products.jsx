import React, {createContext,useState} from 'react'

import dslr from "../Photos/dslr.jpg"
import iphone from "../Photos/iphone.jpg"
import bag from "../Photos/bag.jpg"
import coffee from "../Photos/coffee.jpg"
import mac from "../Photos/mac.jpg"
import headphone from "../Photos/headphone.jpg"

export const ProductsContext = createContext();

const Products = (props) => {
    const [products] =useState([
       { id:1,name: 'Dslr', price: 300 , image: dslr, status: 'hot' },
       { id:2,name: 'Head Phone', price: 500 , image: headphone, status: 'new' },
       { id:3,name: 'Bag', price: 200 , image: bag, status: 'hot' },
       { id:4,name: 'Mac Book', price: 900 , image: mac, status: 'new' },
       { id:5,name: 'I-Phone', price: 700 , image: iphone, status: 'hot' },
       { id:6,name: 'Coffee', price: 100 , image: coffee, status: 'hot' }
    ]);
  return (
    <ProductsContext.Provider value={{products: [...products]}}>
         {props.children}
    </ProductsContext.Provider>
  )
}

export default Products