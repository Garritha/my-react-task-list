import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/v1/Tarea';

// Crear una nueva tarea
async function createTask(title, description, userId) {
  try {
    const response = await axios.post(`${API_BASE_URL}/crear`, {
      titulo: title,
      descripcion: description,
      usuario: userId,
    });
    return response.data.Tarea; // Devuelve la tarea creada
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    throw error;
  }
}

// Actualizar una tarea
async function updateTask(taskId, newTitle, newDescription, newState) {
  try {
    const response = await axios.put(`${API_BASE_URL}/${taskId}`, {
      titulo: newTitle,
      descripcion: newDescription,
      estado: newState,
    });
    return response.data.Tarea; // Devuelve la tarea actualizada
  } catch (error) {
    console.error('Error al actualizar la tarea:', error);
    throw error;
  }
}

// Eliminar una tarea
async function deleteTask(taskId) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${taskId}`);
    return response.data.msg; // Devuelve un mensaje de confirmación
  } catch (error) {
    console.error('Error al eliminar la tarea:', error);
    throw error;
  }
}

// Obtener todas las tareas
async function getTasks() {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Devuelve un array de tareas
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    throw error;
  }
}

// Obtener una tarea por ID
async function getTaskById(taskId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${taskId}`);
    return response.data.Tarea; // Devuelve la tarea encontrada
  } catch (error) {
    console.error('Error al obtener la tarea por ID:', error);
    throw error;
  }
}

// Cambiar el estado de una tarea
async function changeTaskStatus(taskId) {
  try {
    const response = await axios.patch(`${API_BASE_URL}/${taskId}`);
    return response.data.Tarea; // Devuelve la tarea actualizada
  } catch (error) {
    console.error('Error al cambiar el estado de la tarea:', error);
    throw error;
  }
}

async function getTaskByUserId(userId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${userId}/tareas`);
    return response.data; // Devuelve un array de tareas
  } catch (error) { return error;}
}


async function moveToDeletedTasks(taskId) {
  try {
    const response = await axios.post(`${API_BASE_URL}/eliminar/${taskId}`);
    return response.data.msg; // Devuelve la tarea actualizada
  } catch (error) {
    console.error('Error al cambiar el estado de la tarea:', error);
    throw error;
  }
}



export { createTask, updateTask, deleteTask, getTasks, getTaskById, changeTaskStatus, getTaskByUserId, moveToDeletedTasks,};
