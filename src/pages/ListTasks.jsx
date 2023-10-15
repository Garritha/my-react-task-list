import React, { useState, useEffect } from "react";
import Task from "../components/Task/index";
import {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} from "../api/axios.js";
import Axios from "axios";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

const colors = {
  pendiente: "red.400",
  en_progreso: "yellow.400",
  completa: "green.400",
};

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDes, setTaskDes] = useState("");

  async function loadTasks() {
    try {
      const token = localStorage.getItem('token');
console.log(token);
      if (!token) {
        console.error('El token de autorización no está disponible.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await Axios.get('http://localhost:8080/task', {
        headers,
      });

      const tasks = response.data;
      setTasks(tasks);
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreateTask() {
    try {
      if (taskTitle && taskDes) {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
  
        if (!token) {
          console.error("El token de autorización no está disponible.");
          return;
        }
  
        const headers = {
          Authorization: `Bearer ${token}`, // Asegúrate de que el token se envíe en el encabezado
          "Content-Type": "application/json",
        };
  
        const newTask = await createTask(taskTitle, taskDes, userId, token, headers);
        setTasks([...tasks, newTask]);
        setTaskTitle("");
        setTaskDes("");
      } else {
        console.error("El título y la descripción de la tarea son obligatorios.");
      }
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
            titulo: newTitle,
            descripcion: newDes,
            estado: newState,
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
      // Actualiza el estado de la tarea llamando a la función getTaskById
      const updatedTask = await getTaskById(taskId);
      if (updatedTask) {
        const updatedTasks = tasks.map((task) => {
          if (task._id === taskId) {
            return updatedTask;
          }
          return task;
        });
        setTasks(updatedTasks);
      }
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
        <Textarea
          placeholder="Descripción de la tarea"
          value={taskDes}
          onChange={(e) => setTaskDes(e.target.value)}
        />
        <Flex justify="center">
          <Button onClick={handleCreateTask}>Crear Tarea</Button>
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
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
            onComplete={handleCompleteTask}
          />
        ))}
      </Box>
    </VStack>
  );
}

export default ListTasks;
