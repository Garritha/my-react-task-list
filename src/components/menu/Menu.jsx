import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Link,
  Flex,
  Stack,
  useColorModeValue,
  useColorMode, // Agrega el uso de useColorMode
} from "@chakra-ui/react";

function Menu() {
  const navigate = useNavigate();
  const { colorMode } = useColorMode(); // Obtén el modo de color actual

  const handleLogout = () => {
    // Simulamos el cierre de sesión estableciendo isAuthenticated en falso.
    // En una aplicación real, deberías realizar acciones como limpiar el estado,
    // eliminar tokens de autenticación, etc.
    setIsAuthenticated(false);

    // Redirige al usuario a la página de inicio de sesión
    navigate("/");
  };

  const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  };

  const user = getUserFromLocalStorage();

  // Define los colores de texto y hover según el modo de color
  const textColor = useColorModeValue(
    colorMode === "dark" ? "white" : "#1E6F9F",
    colorMode === "dark" ? "white" : "gray.700"
  );
  const hoverColor = useColorModeValue("gray.400", "gray.700");

  return (
    <Box as="nav" bg="transparent" padding="10px">
      <Flex justify="center">
        <Stack direction="row" spacing="4">
          <Link
            as={RouterLink}
            to="/home"
            color={textColor}
            textDecoration="none"
            padding="5px 10px"
            borderRadius="5px"
            _hover={{ backgroundColor: hoverColor, color: "white" }} 
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
            _hover={{ backgroundColor: hoverColor, color: "white" }} 
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
            _hover={{ backgroundColor: hoverColor, color: "white" }} 
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
            _hover={{ backgroundColor: hoverColor, color: "white" }} 
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
            _hover={{ backgroundColor: hoverColor, color: "white" }} 
          >
            Log Out
          </Link>
          {user && (
            <Box
              color={textColor} /* Cambio de color en modo oscuro */
              padding="5px 10px"
              borderRadius="5px"
              _hover={{ backgroundColor: hoverColor, color: "white" }} /* Cambio de color en hover */
            >
              Hello, {user.nombre}
            </Box>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}

export default Menu;
