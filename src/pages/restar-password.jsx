import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Aquí puedes agregar la lógica para enviar una solicitud de restablecimiento de contraseña al backend.
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
