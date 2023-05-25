
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [taskTitle, setTaskTitle] = useState(""); // Nueva variable de estado para el título de la tarea


  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }
  // Restablecer el título de la tarea a una cadena vacía
    

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>List Task</h1>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add new Task" type="text" onChange={onChangeTitle} value={title} />
        <button>Created <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}