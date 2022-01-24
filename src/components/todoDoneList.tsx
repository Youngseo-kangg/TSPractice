import React from 'react';
import { TodoListDoneItem } from './todoListDoneItem';

interface TodoListProps {
  todosDone: Array<Todo>;
  moveToDo: MoveToDo;
  removeTodo: RemoveTodo;
}

export const TodoDoneList: React.FC<TodoListProps> = ({
  todosDone,
  moveToDo,
  removeTodo,
}) => {
  return (
    <section>
      <h3>To-done</h3>
      <ul>
        {todosDone.length === 0 ? (
          <div>일합시다 일!</div>
        ) : (
          <>
            {todosDone.map((todo) => (
              <TodoListDoneItem
                key={todo.text}
                todo={todo}
                removeTodo={removeTodo}
                moveToDo={moveToDo}
              />
            ))}
          </>
        )}
      </ul>
    </section>
  );
};
