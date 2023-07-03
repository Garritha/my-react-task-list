import React from "react";
import { Link as RouterLink } from "react-router-dom";
<<<<<<< HEAD
import { Box, Link,  Flex, Stack, useColorMode } from "@chakra-ui/react";
=======
import { Box, Link, Text, Flex, Stack } from "@chakra-ui/react";
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
<<<<<<< HEAD
  <Box as="nav" bg={colorMode === "light" ? "#262626" : "gray.800"} padding="10px">
      <Flex justify="center">
        <Stack direction="row" spacing="4">
          <Link
            as={RouterLink}
            to="/"
            color="#045FB4"
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            color="#045FB4"
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}
          >
            About
          </Link>
          <Link
            as={RouterLink}
            to="/tasks"
            color="#045FB4"
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}
          >
=======
  <Box as="nav" bg="#262626" padding="10px">
      <Flex justify="center">
        <Stack direction="row" spacing="4">
          <Link as={RouterLink} to="/" color="#045FB4" textDecoration="none" padding="5px 10px" borderRadius="5px" _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="#045FB4" textDecoration="none" padding="5px 10px" borderRadius="5px" _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}>
            About
          </Link>
          <Link as={RouterLink} to="/tasks" color="#045FB4" textDecoration="none" padding="5px 10px" borderRadius="5px" _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}>
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e
            List Tasks
          </Link>
        </Stack>
      </Flex>
<<<<<<< HEAD
     
=======
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e
    </Box>
  );
}

export default Menu;
