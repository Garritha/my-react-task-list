import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/index";
import { Tasks } from "../components/Tasks";
import styles from "../pages/Styles/Home.module.css";

const LOCAL_STORAGE_KEY = "todo:tasks";

const Home = () => {
  const [showTasks, setShowTasks] = useState(false); // Estado para controlar la visibilidad de la lista de tareas
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDes, setTaskDes] = useState("");

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
      {!showTasks ? (
        <div className={styles.container}>
          <h1 className={styles.heading}>List Task</h1>
          <p className={styles.paragraph}>
            Welcome to the presentation of our Task Lists! Our application offers you an easy and efficient way to organize your daily tasks. With our lists, you can create, edit, and manage your tasks quickly and easily. Prioritize your activities, set reminders, and mark completed tasks. Our Task Lists will help you stay focused, increase productivity, and achieve your goals more efficiently. Discover how to simplify your life and reach your goals with our Task Lists today
          </p>
          <button className={styles.button} onClick={() => setShowTasks(true)}>
            <i className="fas fa-plus"></i> Add New Task
          </button>
        </div>
      ) : (
        <div>
          <Header handleAddTask={addTask} />
          <Tasks
            tasks={tasks}
            onDelete={deleteTaskById}
            onComplete={toggleTaskCompletedById}
            onEdit={editTaskById}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
