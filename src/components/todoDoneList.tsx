import React from 'react';
import { TodoListDoneItem } from './todoListDoneItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  removeTodo: RemoveTodo;
}

export const TodoDoneList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  removeTodo,
}) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListDoneItem
            key={todo.text}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};
