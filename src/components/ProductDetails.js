import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Text,
} from "@chakra-ui/react"

function ProductDetails({ addToCart, Cartbutton }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(null)
  const id = useParams()

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id.id)
      .then((res) => {
        setProducts(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <Card className="flex w-96 h-30  text-white text-xl font-bold">
      <Card>
        <Heading size="md">{products.title}</Heading>
        <CardBody>
          <img src={products.image} alt={products.title} />
          <p>{products.description}</p>
          <Text color="blue.600" fontSize="2xl">
            {products.price}
          </Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue" onClick={addToCart}>
              {Cartbutton} Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Card>
  )
}

export default ProductDetails
