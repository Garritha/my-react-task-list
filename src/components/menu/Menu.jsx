import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Link, Flex, Stack, useColorModeValue } from "@chakra-ui/react";

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulamos el cierre de sesión estableciendo isAuthenticated en falso.
    // En una aplicación real, deberías realizar acciones como limpiar el estado,
    // eliminar tokens de autenticación, etc.
    setIsAuthenticated(false);

    // Redirige al usuario a la página de inicio de sesión
    navigate("/");
  };

  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("#1E6F9F", "white");

  return (
    <Box as="nav" bg={bgColor} padding="10px">
      <Flex justify="center">
        <Stack direction="row" spacing="4">
          <Link
            as={RouterLink}
            to="/home"
            color={textColor}
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "gray.400", color: "white" }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            color={textColor}
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "gray.400", color: "white" }}
          >
            About
          </Link>
          <Link
            as={RouterLink}
            to="/tasks"
            color={textColor}
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "gray.400", color: "white" }}
          >
            List Tasks
          </Link>
          <Link
            as={RouterLink}
            to="/profile"
            color={textColor}
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "gray.400", color: "white" }}
          >
            Profile
          </Link>
          <Link
            as={RouterLink}
            to="/"
            onClick={handleLogout}
            color={textColor}
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: "gray.400", color: "white" }}
          >
            Log Out
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Menu;
