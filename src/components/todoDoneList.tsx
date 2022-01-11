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
      <h3>To-done</h3>
      <ul>
        {todos.length === 0 ? (
          <img src='../../static/catWorking.gif' />
        ) : (
          <>
            {todos.map((todo) => (
              <TodoListDoneItem
                key={todo.text}
                todo={todo}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
              />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
