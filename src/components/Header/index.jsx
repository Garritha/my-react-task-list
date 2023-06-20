import { useForm } from 'react-hook-form';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FcTodoList } from 'react-icons/fc';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [des, setDes] = useState('');

  function onSubmit(data) {
    handleAddTask(data.title, des);
    setTitle('');
    setDes('');
  }

  function onChangeDes(event) {
    setDes(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <FcTodoList size={45} /> List Task
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.newTaskForm}>
        <input
          placeholder="Add new Task"
          type="text"
          {...register('title', { required: true, minLength: 3 })}
        />
        {errors.title && <span className={styles.error}>El nombre debe tener al menos 3 caracteres</span>}
        <textarea
          placeholder="Add description"
          type="text"
          onChange={onChangeDes}
          value={des}
        />

        <button>Created <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  );
}
