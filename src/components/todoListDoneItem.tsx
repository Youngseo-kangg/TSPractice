import React from 'react';
import style from '../styles/todoListItem.module.scss';
import { useAppDispatch } from '../app/hooks';
import { removeTodo, moveToDo } from '../features/todoSlice';

interface todoPropsDone {
  todo: Todo;
}

export const TodoListDoneItem: React.FC<todoPropsDone> = ({ todo }) => {
  const dispatch = useAppDispatch();
  return (
    <li
      className={
        todo.complete
          ? `${style.listItemDone} ${style.completed}`
          : `${style.listItemDone} ${style.current}`
      }
    >
      <p>{todo.text}</p>
      <div className={style.itemBtnWrapper}>
        <button
          className={style.itemBtn}
          onClick={() => dispatch(removeTodo(todo))}
        >
          지우기
        </button>
        <button
          className={style.itemBtn}
          onClick={() => dispatch(moveToDo(todo))}
        >
          다시하기
        </button>
      </div>
    </li>
  );
};
