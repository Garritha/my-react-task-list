import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Axios from 'axios';




function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleRegister = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/auth/register', {
        email,
        password,
      });
      console.log(response.data); // Muestra la respuesta del servidor
      // Puedes redirigir al usuario a una página de inicio de sesión o mostrar un mensaje de éxito aquí
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
          Register
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          variant="solid"
          width="full"
          mt={4}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
