
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState(""); // Nueva variable de estado para el título de la tarea
  

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
   if (taskTitle.trim() !== "") { // Verificar si el título de la tarea no está vacío
      const newTask = {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      };
       setTasksAndSave([...tasks, newTask]);
      setTaskTitle(""); // Restablecer el título de la tarea a una cadena vacía
    }
  }

  function editTaskById(taskId, newTitle) {
    const updatedTasks = tasks.map(task =>{
      if(task.id === taskId){
        return {... task, 
          title: newTitle
       
        };
      }
      return task
    });
    setTasksAndSave(updatedTasks);
  }
    
  
 
  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
         onEdit={editTaskById} 
      />
      
    </>
  )
}

export default App
