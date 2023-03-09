import React from "react"
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./component/Homepage"
import Products from "./component/Products"
import ProductDetails from "./component/ProductDetails"
function App() {
  return (
    <Router>
      <Homepage />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App
