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
    <section>
      <h3>To-done</h3>
      <ul>
        {todos.length === 0 ? (
          <div>일합시다 일!</div>
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
    </section>
  );
};
