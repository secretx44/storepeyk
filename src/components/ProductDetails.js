import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader/Loader"
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react"
import ModalBtn from "./ModalBtn"

function ProductDetails() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState("")
  const [loading, setLoading] = useState(false)
  const id = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://fakestoreapi.com/products/" + id.id)
      .then((res) => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        setProducts(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  function addtoCart() {
    setCart(id)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Card className="flex m-auto  w-96 h-30 text-start text-white md:text-md my-4 text-sm font-bold">
          <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
            <Card>
              <Heading size="md" className="text-center">
                {products.title}
              </Heading>
              <CardBody>
                <img src={products.image} alt={products.title} />
                <p>{products.description}</p>
                <Text color="blue.600" fontSize="2xl" className="my-4">
                  ${products.price}
                </Text>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    <ModalBtn />
                  </Button>
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    onClick={addtoCart}
                  >
                    {cart.length === 0 ? "Add to cart" : "Added"}
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        </Card>
      )}
    </>
  )
}

export default ProductDetails
