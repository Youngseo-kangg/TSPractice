import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { moveToDone } from '../features/todoSlice';
import style from '../styles/todoListItem.module.scss';

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  return (
    <li
      className={
        todo.complete
          ? `${style.listItem} ${style.completed}`
          : `${style.listItem} ${style.current}`
      }
    >
      <p>{todo.text}</p>
      <button
        className={style.itemBtn}
        onClick={() => dispatch(moveToDone(todo))}
      >
        완료
      </button>
    </li>
  );
};
