import React, {createContext,useState} from 'react'
import bag from "../Images/Bag.jpg"
import bed from "../Images/Bed.jpg"
import blowdryer from "../Images/BlowDryer.jpg"
import clothes from "../Images/clothes.jpg"
import earphone from "../Images/Earphone.jpg"
import headphone from "../Images/Headphone.jpg"
import iphone from "../Images/iphon.jpg"
import mac from "../Images/mac.jpg"
import sandal from "../Images/Sandal(1).jpg"


export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] =useState([
      {id:1, name: 'BAG', price: 300, image: bag, status: 'hot'},
      {id:2, name: 'BED', price: 400, image: bed, status: 'new'},
      {id:3, name: 'BLOW DRYER', price: 200, image: blowdryer, status: 'hot'},
      {id:4, name: 'CLOTHES', price: 500, image: clothes, status: 'new'},
      {id:5, name: 'EARPHONE', price: 300, image: earphone, status: 'hot'},
      {id:6, name: 'HEADPHONE', price: 100, image: headphone, status: 'new'},
      {id:7, name: 'I-PHONE', price: 800, image: iphone, status: 'hot'},
      {id:8, name: 'MAC BOOK', price: 1000, image: mac, status: 'new'},
      {id:9, name: 'SANDAL', price: 50, image: sandal, status: 'hot'}
    ]);
  return (
    <ProductsContext.Provider value={{products: [...products]}}>
         {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider