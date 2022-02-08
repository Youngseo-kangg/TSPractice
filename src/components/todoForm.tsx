import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addTodo } from '../features/todoSlice';
import style from '../styles/todoForm.module.scss';
import Swal from 'sweetalert2';

export const TodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [error, setError] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
    setError(false);
  };
  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo === '') {
      setError(true);
    } else {
      dispatch(addTodo({ text: newTodo, complete: false }));
      await Swal.fire({
        title: '할일을 추가했습니다.',
        text: '다른 일도 추가해보세요.',
        icon: 'success',
      });
      setNewTodo('');
    }
  };

  return (
    <>
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
      {error && <p id={style.formError}>할일을 입력해주세요.</p>}
    </>
  );
};
