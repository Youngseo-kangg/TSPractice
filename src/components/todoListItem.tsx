import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { moveToDone } from '../features/todoSlice';
import style from '../styles/todoListItem.module.scss';
import Swal from 'sweetalert2';

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const done: MoveToDone = (todo: Todo) => {
    dispatch(moveToDone(todo));
    Swal.fire({
      title: 'To-done으로 이동했습니다.',
      text: '다른 일도 얼른 끝내보세요.',
      icon: 'success',
    });
  };
  return (
    <li
      className={
        todo.complete
          ? `${style.listItem} ${style.completed}`
          : `${style.listItem} ${style.current}`
      }
    >
      <p>{todo.text}</p>
      <button className={style.itemBtn} onClick={() => done(todo)}>
        완료
      </button>
    </li>
  );
};
