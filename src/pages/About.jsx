import React from "react";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      maxW="75%"
      margin="0 auto"
      textAlign="center"
      paddingTop="20px"
      paddingBottom="20px"
   
      
    >
      <Heading 
      as="h3" size="lg"
       marginBottom="16px">
        About Us
      </Heading>
      <Text fontSize="md" marginBottom="16px" textAlign="justify">
           In this application we can see that it has an input and a text field where we can enter the task to be carried out with its description. We have the button to add tasks at the bottom, we can see how many tasks we have saved and carried out, we also see the task with Its description in which we can modify the task and the description we also have to complete the task and delete the task.
        The technologies implemented in this project were react
      </Text>
    </Box>
  );
};

export default About;