import React, { useState, useEffect } from "react";
import Task from "../components/Task/index";
import { createTask, updateTask, deleteTask,  getTaskByUserId, changeTaskStatus, moveToDeletedTasks } from "../api/axios.js";
import { Box, Button, Flex, Input, Text, Textarea, VStack, useColorModeValue } from "@chakra-ui/react";

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDes, setTaskDes] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    loadTasksByUserId();
  }, []);

  const loadTasksByUserId = async () => {
    try {
      const tasksData = await getTaskByUserId(userId);
      console.log("Tareas cargadas:", tasksData);
      if (Array.isArray(tasksData)) {
        setTasks(tasksData);
      } else {
        console.error("Las tareas recibidas no son un arreglo válido.");
      }
    } catch (error) {
      console.error("Error al cargar tareas por usuario:", error);
    }
  }

  async function handleCreateTask() {
    try {
      if (taskTitle && taskDes) {
        const newTask = await createTask(taskTitle, taskDes, userId);
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

  async function handleMoveToDeletedTasks(taskId, userId) {
    try {
      await moveToDeletedTasks(taskId);
      const remainingTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(remainingTasks);
    } catch (error) {
      console.error("Error al mover la tarea a eliminadas:", error);
    }
  }

  async function handleCompleteTask(taskId, newState, estado) {
    try {
      if (estado === "pendiente" && newState !== "completa" && newState !== "en_progreso") {
        throw new Error("El estado de la tarea debe ser 'completa' o 'en_progreso'");
      }

      await changeTaskStatus(taskId, newState);
      const updatedTasks = tasks.map((task) => {
        if (task._id === taskId) {
          return {
            ...task,
            estado: newState,
          };
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error al actualizar el estado de la tarea:", error);
    }
  }
  const textColor = useColorModeValue("#1E6F9F", "white");
  return (
    <VStack align="center" spacing={6} width="100%">
      <Box width="100%">
        <Text
          fontSize="24px"
          fontWeight="bold"
          color={textColor}
          textAlign="center"
        >
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
          <Button
            onClick={handleCreateTask}
            bg="transparent" // Fondo transparente
            _hover={{
              background: "none", // Cambia el fondo en hover a transparente
              color: "blue.500", // Cambia el color del texto en hover
            }}
          >
            Crear Tarea
          </Button>
        </Flex>
      </Box>
      <Flex wrap="wrap" justifyContent="center">
        {tasks.map((task) => (
          <Task
            key={task.id}
            userId={userId}
            task={task}
            titulo={task.titulo}
            estado={task.estado}
            descripcion={task.descripcion}
            onDelete={handleDeleteTask}
            onMoveToDeletedTasks={handleMoveToDeletedTasks}
            onUpdate={handleUpdateTask}
            onComplete={handleCompleteTask}
          />
        ))}
      </Flex>
    </VStack>
  );
}

export default ListTasks;
