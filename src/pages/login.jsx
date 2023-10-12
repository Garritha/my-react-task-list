import React, { useState } from 'react';
import Axios from 'axios';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
  Text,
  Link,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const users = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'password456' },
    // Agrega más usuarios si es necesario
  ];

    const handleLogin = () => {
      Axios.post('/auth/login', { mail: email, password }) // Ruta de autenticación en el backend
        .then((response) => {
          // Maneja la respuesta del backend
          const { data } = response;
          if (data.token) {
            setIsAuthenticated(true);
            // Almacena el token en localStorage o en una cookie para su uso posterior
            localStorage.setItem('token', data.token);
            navigate('/home'); // Redirige al usuario a la página de inicio si las credenciales son correctas
          } else {
            alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
          }
        })
        .catch((error) => {
          console.error('Error al iniciar sesión:', error);
          alert('Error al iniciar sesión. Por favor, inténtalo más tarde.');
        });
    };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bg="black"
        color="blue"
      >
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" bg="black">
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Login
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="white"
            />
          </FormControl>
          <FormControl id="password" isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="white"
            />
          </FormControl>
          <Button
            colorScheme="blue"
            variant="solid"
            width="full"
            mt={4}
            onClick={handleLogin}
          >
            Log In to My Account
          </Button>
          <Text mt={2} textAlign="center">
            <Link color="blue" href="/reset-password">
              Forgot Password?
            </Link>
          </Text>
          <Text mt={2} textAlign="center">
            <Link color="blue" href="/register">
              Register
            </Link>
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
