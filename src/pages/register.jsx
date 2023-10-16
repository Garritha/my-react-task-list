import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  useColorMode,
} from '@chakra-ui/react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const handleRegister = async () => {
    // Validar la contraseña en el cliente
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      // La contraseña no cumple con los requisitos, muestra un mensaje de error al usuario
      setError(
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial, y tener al menos 8 caracteres.'
      );
      return;
    }

    try {
      const response = await Axios.post('http://localhost:8080/user/create-user', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        setRegistrationSuccess(true);
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error(error);
      setError('Error: An unexpected error occurred.');
    }
  }

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
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg={colorMode === "dark" ? "black" : "white"} // Cambia el color de fondo según el modo
        color={colorMode === "dark" ? "blue" : "blue.500"} // Cambia el color del texto según el modo
      >
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Register
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
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
        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        {registrationSuccess && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            User created successfully.
          </Alert>
        )}
      </Box>
    </Box>
  );
}

export default Register;
