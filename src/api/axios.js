import Axios from "axios";

const API_BASE_URL = "http://localhost:8080/task"; 

// Función para crear una nueva tarea
async function createTask(title, description, userId, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`, // Adjunta el token en el encabezado
      'Content-Type': 'application/json',
    };

    const response = await Axios.post(
      `${API_BASE_URL}/crear`,
      {
        titulo: title,
        descripcion: description,
        userId: userId,
      },
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    throw error;
  }
}
// Actualizar una tarea existente
async function updateTask(taskId, title, description, state) {
  try {
    const response = await Axios.put(`${API_BASE_URL}/actualizar/${taskId}`, {
      titulo: title,
      descripcion: description,
      estado: state,
    });
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
    throw error;
  }
}

// Eliminar una tarea por su ID
async function deleteTask(taskId) {
  try {
    await Axios.delete(`${API_BASE_URL}/eliminar/${taskId}`);
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    throw error;
  }
}

// Obtener todas las tareas
async function getAllTasks() {
  try {
    const response = await Axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener todas las tareas:", error);
    throw error;
  }
}

// Obtener una tarea por su ID
async function getTaskById(taskId) {
  try {
    const response = await Axios.get(`${API_BASE_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la tarea por ID:", error);
    throw error;
  }
}

// Obtener tareas completadas
async function getCompletedTasks() {
  try {
    const response = await Axios.get(`${API_BASE_URL}/completas`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas completadas:", error);
    throw error;
  }
}

// Obtener tareas incompletas
async function getIncompleteTasks() {
  try {
    const response = await Axios.get(`${API_BASE_URL}/incompletas`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas incompletas:", error);
    throw error;
  }
}

export {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  getCompletedTasks,
  getIncompleteTasks,
};
