import React from "react"
import { Flex, Spacer, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RiShoppingCartFill } from "react-icons/ri"
function Navbar() {
  return (
    <Box>
      <Flex>
        <Box w="70px" h="10" bg="red.500">
          <Link exact to="/">
            Home
          </Link>
        </Box>
        <Box w="70px" h="10" bg="red.500">
          <Link to="/Products">Products</Link>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  )
}

export default Navbar
