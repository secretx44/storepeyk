import React, { useState, useEffect } from "react"
import axios from "axios"

function Cartbutton() {
  const [cart, setCart] = useState(null)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/1")
      .then((res) => {
        setCart(res.data)
        console.log("button", res.data)
      }, [])
      .catch((err) => {
        console.log(err)
      }, [])
  }, [])

  return (
    <div>
      <h1>Cart</h1>
      <p>{cart.length}</p>
    </div>
  )
}

export default Cartbutton
