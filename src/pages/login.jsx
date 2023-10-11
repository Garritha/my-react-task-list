import React, { useState } from 'react';
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
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
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
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Login
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="black"
            />
          </FormControl>
          <FormControl id="password" isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="black"
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
            <Link color="blue" href="/forgot-password">
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
