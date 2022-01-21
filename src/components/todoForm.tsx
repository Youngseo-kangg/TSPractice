import React, { ChangeEvent, FormEvent, useState } from 'react';
import style from '../styles/todoForm.module.scss';

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form className={style.todoForm}>
      <input
        id={style.todoFormInput}
        type='text'
        value={newTodo}
        placeholder='할일을 입력하세요'
        onChange={handleChange}
      />
      <button id={style.todoFormBtn} type='submit' onClick={handleSubmit}>
        추가하기
      </button>
    </form>
  );
};
