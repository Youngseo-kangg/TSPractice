import React from 'react';

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li className={todo.complete ? 'completed' : 'current'}>
      <p>{todo.text}</p>
      <button onClick={() => toggleComplete(todo)}>완료</button>
    </li>
  );
};
