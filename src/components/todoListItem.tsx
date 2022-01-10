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
    <li>
      <p className={todo.complete ? 'completed' : 'current'}></p>
      <input
        type='checkbox'
        checked={todo.complete}
        onChange={() => toggleComplete(todo)}
      />{' '}
      {todo.text}
    </li>
  );
};
