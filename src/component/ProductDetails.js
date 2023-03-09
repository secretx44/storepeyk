import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function ProductDetails() {
  const [products, setProducts] = useState([])
  const id = useParams()

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      <h1>Details</h1>
      {products.map(
        (product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ),
        []
      )}
    </div>
  )
}

export default ProductDetails
