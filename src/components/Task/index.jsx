import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash  } from 'react-icons/tb';
import { FiEdit } from 'react-icons/fi';

export function Task({ task,   onDelete, onComplete, onEdit }) {
 
  function handleEditClick() {
    const newTitle = prompt("Ingrese el nuevo título de la tarea:");
    if (newTitle !== null) {
      onEdit(task.id, newTitle);
    }
  }
  
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
   
        <p className={task.isCompleted ? styles.textCompleted : ""}>
            {task.title}
        </p>
        <textarea className={task.isCompleted ? styles.textCompleted : ""}>
          {task.des}
        </textarea>
   <button className={styles.editBoton} onClick={handleEditClick}> <FiEdit size={20}/> </button>
      
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}