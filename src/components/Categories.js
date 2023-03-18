import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader/Loader"
function ProductList() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        setProducts(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const categories = [...new Set(products.map((product) => product.category))]

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center bg-stone-200">
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
          <div className="border-2 border-gray-300 rounded-lg px-4 py-12 my-4 shadow-gray-900 shadow-2xl">
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 place-items-center text-justify py-1">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-12 border-2 border-emerald-600 h-81 w-72 rounded-xl shadow-xl hover:shadow-2xl hover:border-emerald-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120"
                >
                  <Link to={`/products/${product.id}`} className="h-24 ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full object-cover bg-cover overflow-hidden "
                    />
                  </Link>
                  <p className="font-bold flex text-center">{product.title}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductList
