import React, { useState, useEffect } from "react";
import Task from "../components/Task/index";
import {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} from "../api/axios.js";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";


const colors = {
  pendiente: "red.400",
  en_progreso: "yellow.400",
  completa: "green.400",
};


const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDes, setTaskDes] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  async function loadTasks() {
    try {
      const allTasks = await getAllTasks();
      setTasks(allTasks);
    } catch (error) {
      console.error("Error al cargar las tareas:", error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreateTask() {
    try {
      const newTask = await createTask(taskTitle,taskDes );
      setTasks([...tasks, newTask]);
      setTaskTitle("");
      setTaskDes("");
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  }

async function handleUpdateTask(taskId, newTitle, newDes, newState) {
  try {
    await updateTask(taskId, newTitle, newDes, newState);
    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId) {
        return {
          ...task,
          title: newTitle,
          des: newDes,
          estado: newState, // Agrega el nuevo estado
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
  }
}


  async function handleDeleteTask(taskId) {
    try {
      await deleteTask(taskId);
      const remainingTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(remainingTasks);
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  }
  async function handleCompleteTask(taskId) {
    try {
      const updatedTask = await updateTask(
        taskId,
        undefined,
        undefined,
        "completada"
      );
      const updatedTasks = tasks.map((task) => {
        if (task._id === taskId) {
          return updatedTask;
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
    }
  }


  return (
    <VStack align="center" spacing={6}>
      <Box>
        <Text fontSize="24px" fontWeight="bold" color="gray.500" align="center">
          List Task
        </Text>
        <Input
          type="text"
          placeholder="Título de la tarea"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Descripción de la tarea"
          value={taskDes}
          onChange={(e) => setTaskDes(e.target.value)}
        />
        <Flex justify="center">
          <Button onClick={() => handleCreateTask(taskTitle, taskDes)}>
            Crear Tarea
          </Button>
        </Flex>
      </Box>
      <Box>
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            title={task.titulo}
            estado={task.estado}
            descripcion={task.descripcion}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
            onComplete={handleCompleteTask}
          />
        ))}
      </Box>
    </VStack>
  );
};

export default ListTasks;
