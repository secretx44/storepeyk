import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h1>Products</h1>
      {products.map(
        (product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <p>{product.title}</p>
              <img src={product.image} alt={product.title} />
            </Link>
          </div>
        ),
        []
      )}
    </div>
  )
}

export default Products
