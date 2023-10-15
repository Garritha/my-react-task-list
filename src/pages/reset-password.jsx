import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, useColorMode } from '@chakra-ui/react';
import Axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const { colorMode } = useColorMode(); // Obtener el modo de color actual

  const handleResetPassword = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/auth/reset-password', {
        email,
      });
      console.log(response.data); // Muestra la respuesta del servidor
      // Puedes mostrar un mensaje al usuario indicando que se envió un correo electrónico para restablecer la contraseña
    } catch (error) {
      console.error(error); // Muestra errores si la solicitud falla
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  };

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
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" bg={colorMode === "dark" ? "black" : "white"} color={colorMode === "dark" ? "blue" : "blue.500"}>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Reset Password
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          variant="solid"
          width="full"
          mt={4}
          onClick={handleResetPassword}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}

export default ResetPassword;
