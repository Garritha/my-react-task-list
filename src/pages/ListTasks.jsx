import { useState, useEffect } from "react";
import { Tasks } from "../components/Tasks";
import styles from "../components/Header/header.module.css";
import { FcTodoList } from 'react-icons/fc';
import Axios from 'axios';


const LOCAL_STORAGE_KEY = "todo:tasks";




function ListTasks() {
const [tasks, setTasks] = useState([]);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDes, setTaskDes] = useState("");

  async function createTask(title, des) {
    try {
      const response = await Axios.post('http://localhost:8080/tasks/crear', {
        titulo: title,
        descripcion: des,
      });
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function updateTaskById(taskId, newTitle, newDes) {
    try {
      const response = await Axios.put(`http://localhost:8080/tasks/actualizar/${taskId}`, {
        titulo: newTitle,
        descripcion: newDes,
      });
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function deleteTaskById(taskId) {
    try {
      await Axios.delete(`http://localhost:8080/tasks/eliminar/${taskId}`);
      const newTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(newTasks);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function fetchAllTasks() {
    try {
      const response = await Axios.get('http://localhost:8080/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  

 function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  function addTask(taskTitle, taskDes) {
    if (taskTitle.trim() !== "") {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        title: taskTitle,
        des: taskDes,
        isCompleted: false,
      };
      setTasksAndSave([...tasks, newTask]);
      setTaskTitle("");
      setTaskDes("");
    }
  }

  function editTaskById(taskId, newTitle) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
        };
      }
      return task;
    });
    setTasksAndSave(updatedTasks);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <div  >
     <h1 className={`${styles.title} ${styles.center}`}>
  <FcTodoList size={45} /> List Task
</h1>

     <Tasks
            tasks={tasks}
            onDelete={deleteTaskById}
            onComplete={toggleTaskCompletedById}
            onEdit={editTaskById}
          />
    </div>
  );
}

export default ListTasks;