import React from 'react';
import { TodoListDoneItem } from './todoListDoneItem';
import style from '../styles/todoList.module.scss';

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
    <section className={style.todoListSection}>
      <div className={style.todoListTitle}>
        <h3>To-done</h3>
      </div>

      {todosDone.length === 0 ? (
        <div className={style.todoListNone}>일합시다 일!</div>
      ) : (
        <div className={style.todoListWrapper}>
          <ul className={style.todoList}>
            {todosDone.map((todo) => (
              <TodoListDoneItem
                key={todo.text}
                todo={todo}
                removeTodo={removeTodo}
                moveToDo={moveToDo}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
