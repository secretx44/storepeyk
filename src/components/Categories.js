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
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="text-center flex justify-center items-center mx-auto p-4 rounded-xl bg-slate-400 text-white text-xl font-bold"
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center text-justify py-1">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex bg-black w-full border-4 border-solid-2 border-white rounded-lg shadow-lg p-4 "
          >
            <Link to={`/products/${product.id}`}>
              <p>{product.title}</p>
              <img src={product.image} alt={product.title} className="w-full" />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
