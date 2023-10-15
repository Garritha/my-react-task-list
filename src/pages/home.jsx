import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router
import {
  Box,
  Button,
  Center,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Home = () => {
  const [showTasks, setShowTasks] = useState(false);
  

  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("#1E6F9F", "white");

  
  return (
    <Center height="100vh">
      {!showTasks ? (
        <Box
          textAlign="center"
          p={6}
          maxW="400px"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          bg={bgColor}
          color={textColor}
        >
          <Heading fontSize="32px" mb="4">
            List Task
          </Heading>
          <Text fontSize="18px" mb="8">
            Welcome to the presentation of our Task Lists! Our application
            offers you an easy and efficient way to organize your daily tasks.
            With our lists, you can create, edit, and manage your tasks quickly
            and easily. Prioritize your activities, set reminders, and mark
            completed tasks. Our Task Lists will help you stay focused, increase
            productivity, and achieve your goals more efficiently. Discover how
            to simplify your life and reach your goals with our Task Lists today
          </Text>
         
          <Link to="/tasks">
            <Button size="lg" bgColor="#ff4f4f" _hover={{ bgColor: "#1E6F9F" }}>
              <AddIcon mr="2" />
              Add New Task
            </Button>
          </Link>
        </Box>
      ) : (
        <Box>{/* Resto del código, sin cambios */}</Box>
      )}
    </Center>
  );
};

export default Home;
