import { useForm } from 'react-hook-form';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FcTodoList } from 'react-icons/fc';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Box, Button, Flex,  Input, Textarea, Icon, Center } from "@chakra-ui/react";


export function Header({ handleAddTask }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [des, setDes] = useState('');

  function onSubmit(data) {
    handleAddTask(data.title, des);
    setTitle('');
    setDes('');
  }
  function showAlert() {
  Swal.fire({
    title: 'Error',
    text: 'El nombre debe tener al menos 3 caracteres',
    icon: 'error',
  }).then(() => {
    window.scrollTo(0, window.scrollY - 50);
  });
}

  function onChangeDes(event) {
    setDes(event.target.value);
  }

  return (
       <header className="header" bg="#030000c7" display="flex" alignItems="center" justifyContent="center" h="200px" pos="relative">
      <Flex justify="center" align="center" h="100%" w="100%">
        <Box color="#377499" fontWeight="700" fontSize="40px">
          <Icon as={FcTodoList } boxSize={10} mr={2} />
          List Task
        </Box>
      </Flex>

      <Center>
        <form onSubmit={handleSubmit(onSubmit)} pos="absolute" h="54px" bottom="-27px" w="100%" maxW="736px" display="flex" flexDirection="column" alignItems="center" gap="8px" px="1rem">
          <Input
            placeholder="Add new Task"
            type="text"
            {...register('title', { required: true, minLength: 3 })}
            h="40px"
            w="80%"
            color="#fff"
            bg="#262626"
            border="1px solid #0D0D0D"
            borderRadius="8px"
            px="16px"
            fontSize="16px"
          />
          {errors.title && (
            showAlert()
          )}

        

          <Textarea
            placeholder="Add description"
            type="text"
            onChange={onChangeDes}
            value={des}
            h="40px"
            w="80%"
            color="#fff"
            bg="#262626"
            border="1px solid #0D0D0D"
            borderRadius="8px"
            px="16px"
            fontSize="16px"
          />

          <Center>
            <Button type="submit" leftIcon={<AiOutlinePlusCircle size={20} />} h="40px" px="16px" bg="#1E6F9F" color="#fff" border="none" borderRadius="8px" display="flex" alignItems="center" gap="6px" fontWeight="900" fontSize="14px">
              Created
            </Button>
          </Center>
        </form>
      </Center>
    </header>
  );
}
