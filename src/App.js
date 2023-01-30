import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Products from "../src/Global/Products"
import Product from '../src/Components/Product'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Products>
        <Product />
      </Products>
    </div>
  )
}

export default App