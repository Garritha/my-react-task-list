import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link,  Flex, Stack, useColorMode } from "@chakra-ui/react";

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
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
            List Tasks
          </Link>
        </Stack>
      </Flex>
     
    </Box>
  );
}

export default Menu;
