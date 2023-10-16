import Axios from "axios";

const API_BASE_URL = "http://localhost:8080/task";

async function createTask(title, description, token, userId) {
  try {
    const data = {
      titulo: title,
      descripcion: description,
      token: token,
      userId: userId, // Asegúrate de que "userId" se envía correctamente
    };
      
    const headers = {
      Authorization: `Bearer ${token}`,
      UserId: userId,
    };
    const response = await Axios.post(
      `${API_BASE_URL}/crear`,
      data, // Pasa los datos como un objeto
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    throw error;
  }
}




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

async function deleteTask(taskId) {
  try {
    await Axios.delete(`${API_BASE_URL}/eliminar/${taskId}`);
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    throw error;
  }
}





async function getCompletedTasks() {
  try {
    const response = await Axios.get(`${API_BASE_URL}/completas`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas completadas:", error);
    throw error;
  }
}

async function getIncompleteTasks() {
  try {
    const response = await Axios.get(`${API_BASE_URL}/incompletas`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas incompletas:", error);
    throw error;
  }
}
async function getTasksInProgress() {
  try {
    const response = await Axios.get(`${API_BASE_URL}/enproceso`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas en proceso:", error);
    throw error;
  }
}
async function getTasksByUser(userId) {
  try {
    const response = await Axios.get(`${API_BASE_URL}/usuario/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas por usuario:", error);
    throw error;
  }
}




export {
  createTask,
  updateTask,
  deleteTask,
  getCompletedTasks,
  getIncompleteTasks,
  getTasksInProgress,
  getTasksByUser,
};