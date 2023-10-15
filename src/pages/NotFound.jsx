import React from 'react';
import { Box, Heading, Button, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NotFound() {
  const { colorMode } = useColorMode(); // Obtener el modo de color actual

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg={colorMode === "dark" ? "black" : "white"} // Cambia el color de fondo según el modo
      color={colorMode === "dark" ? "blue" : "blue.500"} // Cambia el color del texto según el modo
    >
      <Heading as="h1" size="xl" mb={4}>
        Not Found
      </Heading>
      <p>La página que estás buscando no se encuentra.</p>
      <Button
        colorScheme="blue"
        variant="solid"
        mt={4}
        as={RouterLink} to="/home" // Enlace para regresar a la página de inicio
      >
        Regresar a Home
      </Button>
    </Box>
  );
}

export default NotFound;
