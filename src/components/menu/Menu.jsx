import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Link, Flex, Stack } from "@chakra-ui/react";

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

  return (
    <Box as="nav" bg="#262626" padding="10px">
      <Flex justify="center">
        <Stack direction="row" spacing="4">
          <Link as={RouterLink} to="/home" color="#045FB4" textDecoration="none" padding="5px 10px" borderRadius="5px" _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="#045FB4" textDecoration="none" padding="5px 10px" borderRadius="5px" _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}>
            About
          </Link>
          <Link as={RouterLink} to="/tasks" color="#045FB4" textDecoration="none" padding="5px 10px" borderRadius="5px" _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}>
            List Tasks
          </Link>
          <Link    as={RouterLink} to="/"  onClick={handleLogout} color="#045FB4" textDecoration="none" padding="5px 10px" borderRadius="5px" _hover={{ backgroundColor: "#BDBDBD", color: "#FFF" }}>
            Log Out
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Menu;
