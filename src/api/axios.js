import Axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api"; 

  export async function createTask(title, description, token, userId) {
  try {
    const data = {
      titulo: title,
      descripcion: description,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await Axios.post(
      `${API_BASE_URL}/Tarea`, // Asegúrate de usar la ruta correcta para crear tareas
      data,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    throw error;
  }
}

  export async function updateTask(taskId, title, description, state) {
  try {
    const response = await Axios.put(`${API_BASE_URL}/Tarea/${taskId}`, {
      titulo: title,
      descripcion: description,
      complete: state,
    });
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
    throw error;
  }
}
 
   export async function deleteTask(taskId) {
  try {
    await Axios.delete(`${API_BASE_URL}/Tarea/${taskId}`);
  } catch (error) { 
    console.error("Error al eliminar la tarea:", error);
    throw error;
  }
}

  export async function getCompletedTasks(userId) {
  try {
    const response = await Axios.get(`${API_BASE_URL}/Tarea/usuario/${userId}`); // Asegúrate de usar la ruta correcta
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas completadas:", error);
    throw error;
  }
}


export  async function getTasksByUserId (userId) {
  try{
    const response = await Axios.get(`${API_BASE_URL}/Tarea/usuario/${userId}`); // Asegúrate de usar la ruta correcta
        return response.data;
  } catch (error) {
    console.error("Error al obtener tareas por usuario:", error);
    throw error;
  }
}