import React from "react"
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from "./component/Products"
import ProductDetails from "./component/ProductDetails"
import Categories from "./component/Categories"
import Navbar from "./component/Navbar"
import { Container, VStack } from "@chakra-ui/react"
function App() {
  return (
    <VStack>
      <Container maxW="1400px" bg="gray.900" color="white">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </Container>
    </VStack>
  )
}

export default App
