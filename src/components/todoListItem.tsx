import React from 'react';
import style from '../styles/todoListItem.module.scss';

interface TodoListItemProps {
  todo: Todo;
  moveToDone: MoveToDone;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  moveToDone,
}) => {
  return (
    <li
      className={
        todo.complete
          ? `${style.listItem} ${style.completed}`
          : `${style.listItem} ${style.current}`
      }
    >
      <p>{todo.text}</p>
      <button className={style.itemBtn} onClick={() => moveToDone(todo)}>
        완료
      </button>
    </li>
  );
};
