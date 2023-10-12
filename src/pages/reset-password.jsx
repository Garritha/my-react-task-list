import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/reset-password', {
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
      bg="black"
      color="blue"
    >
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" bg="black" color="blue">
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
