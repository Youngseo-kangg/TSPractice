import React from 'react';
import { TodoListItem } from './todoListItem';
import style from '../styles/todoList.module.scss';

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
    <section className={style.todoListSection}>
      <div className={style.todoListTitleWithBtn}>
        <h3>To-do</h3>
        {todos.length !== 0 && (
          <button onClick={removeTodoAll}>모두 없애기</button>
        )}
      </div>

      {todos.length === 0 ? (
        <div className={style.todoListNone}>할일을 새로 추가해보세요!</div>
      ) : (
        <div className={style.todoListWrapper}>
          <ul className={style.todoList}>
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
