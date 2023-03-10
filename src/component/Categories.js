import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function ProductList() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const categories = [...new Set(products.map((product) => product.category))]

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <p>{product.title}</p>
              <img src={product.image} alt={product.title} />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
