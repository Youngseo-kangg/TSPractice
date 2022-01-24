import React from 'react';
import style from '../styles/todoListItem.module.scss';

interface todoPropsDone {
  todo: Todo;
  removeTodo: RemoveTodo;
  moveToDo: MoveToDo;
}

export const TodoListDoneItem: React.FC<todoPropsDone> = ({
  todo,
  removeTodo,
  moveToDo,
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
      <div>
        <button onClick={() => removeTodo(todo.text)}>지우기</button>
        <button onClick={() => moveToDo(todo)}>다시하기</button>
      </div>
    </li>
  );
};
