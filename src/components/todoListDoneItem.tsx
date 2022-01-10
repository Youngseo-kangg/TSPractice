import React from 'react';

interface todoPropsDone {
  todo: Todo;
  removeTodo: RemoveTodo;
  toggleComplete: ToggleComplete;
}

export const TodoListDoneItem: React.FC<todoPropsDone> = ({
  todo,
  removeTodo,
  toggleComplete,
}) => {
  return (
    <li className={todo.complete ? 'completed' : 'current'}>
      <p>{todo.text}</p>
      <button onClick={() => removeTodo(todo.text)}>지우기</button>
      <button onClick={() => toggleComplete(todo)}>다시하기</button>
    </li>
  );
};
