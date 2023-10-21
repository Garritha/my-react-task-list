import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
  const headingColor = useColorModeValue("#1E6F9F", "white");
  const textColor = useColorModeValue("#1E6F9F", "white");

  return (
    <Center height="100vh">
      <Box
        maxW="75%"
        textAlign="center"
        paddingY="20px"
        
        color={useColorModeValue("#1E6F9F", "white")}
      >
        <Heading fontSize="24px" marginBottom="16px" color={headingColor}>
          About Us
        </Heading>
        <Text fontSize="16px" marginBottom="16px" textAlign="justify">
          In this application we can see that it has an input and a text field
          where we can enter the task to be carried out with its description. We
          have the button to add tasks at the bottom, we can see how many tasks
          we have saved and carried out, we also see the task with its
          description in which we can modify the task and the description we
          also have to complete the task and delete the task. The technologies
          implemented in this project were react.
        </Text>
      </Box>
    </Center>
  );
};

export default About;
