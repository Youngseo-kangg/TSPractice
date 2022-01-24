import React from 'react';
import { TodoListItem } from './todoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  moveToDone: MoveToDone;
  removeTodoAll: RemoveTodoAll;
}

export const TodoCurrList: React.FC<TodoListProps> = ({
  todos,
  moveToDone,
  removeTodoAll,
}) => {
  return (
    <section>
      <div>
        <h3>To-do</h3>
        {todos.length !== 0 && (
          <button onClick={removeTodoAll}>모두 없애기</button>
        )}
      </div>

      {todos.length === 0 ? (
        <div>할일을 새로 추가해보세요!</div>
      ) : (
        <div>
          <ul>
            {todos.map((todo) => (
              <TodoListItem
                key={todo.text}
                todo={todo}
                moveToDone={moveToDone}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
