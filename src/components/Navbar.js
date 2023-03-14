import React from "react"
import Homepage from "./Homepage"
import { Flex, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
      <div className="bg-black flex text-center items-center p-4">
        <Box>
          <Flex>
            <Box>
              <Link exact to="/">
                Home
              </Link>
            </Box>
          </Flex>
        </Box>
      </div>
    </>
  )
}

export default Navbar
