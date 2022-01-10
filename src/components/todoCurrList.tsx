import React from 'react';
import { TodoListItem } from './todoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoCurrList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <div>
      {todos.length === 0 ? (
        <div>할일을 새로 추가해보세요!</div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoListItem
              key={todo.text}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
