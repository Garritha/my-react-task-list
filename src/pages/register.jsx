import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState(""); // Estado para manejar errores
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8080/user/create-user",
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 200) {
        setRegistrationSuccess(true);
        
      } else {
        // setError("Error: Failed to create a user.");
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      setError("Error: An unexpected error occurred.");
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
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="black"
        color="blue"
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
        {error && ( // Mostrar el error si está presente
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
