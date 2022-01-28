import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addTodo } from '../features/todoSlice';
import style from '../styles/todoForm.module.scss';

export const TodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTodo({ text: newTodo, complete: false }));
    setNewTodo('');
  };
  console.log(newTodo);
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
