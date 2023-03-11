import React from "react"
import "./index.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails"

import Categories from "./components/Categories"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App
