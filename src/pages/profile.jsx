import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import axios from "axios"; // Asegúrate de importar Axios
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "http://localhost:8080/v1/User"; // URL de la API

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Cuando se carga la página de perfil, obtén la información del usuario desde localStorage.
    
    const userData = localStorage.getItem("user") ;
    console.log("user:", userData);

    if (userData) {
      const user = JSON.parse(userData);
      setName(user.nombre);
      setEmail(user.email);
    }
  }, []);


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const updateUser = async (userName, userEmail, userPassword, userNewPassword) => {
    const userId = localStorage.getItem("userId"); // Obtén el ID del usuario desde localStorage
    try {
      const response = await axios.put(`${API_BASE_URL}/${userId}`, {
        nombre: userName,
        correo: userEmail,
        contrasena: userPassword,
        nuevaContrasena: userNewPassword,
      });
      navigate('/home');
      return response.data.Usuario; // Devuelve el usuario actualizado
    } catch (error) {
      throw error;
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await updateUser(name, email, password, newPassword);
      console.log("Perfil actualizado:");
      // Aquí puedes realizar acciones adicionales, como mostrar un mensaje de éxito.
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      // Aquí puedes mostrar un mensaje de error.
    }
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={4} bg={bgColor}>
      <Text fontSize="2xl" mb={4}>
        Perfil de Usuario
      </Text>
      <FormControl id="name" isRequired mb={4}>
        <FormLabel>Nombre:</FormLabel>
        <Input type="text" value={name}
        
         placeholder="nombre"
          disabled={true}/>
      </FormControl>
      <FormControl id="email" isRequired mb={4}>
        <FormLabel>Correo:</FormLabel>
        <Input type="email" value={email} 
        
        placeholder="correo"
         disabled={true}/>
      </FormControl>
      <FormControl id="password" isRequired mb={4}>
        <FormLabel>Contraseña actual:</FormLabel>
        <Input type="password" value={password} onChange={handlePasswordChange} />
      </FormControl>
      <FormControl id="newPassword" mb={4}>
        <FormLabel>Nueva Contraseña:</FormLabel>
        <Input
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleUpdateProfile}>
        Actualizar Perfil
      </Button>
    </Box>
  );
}

export default Profile;
