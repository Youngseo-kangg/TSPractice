import React, { useState, useEffect } from 'react';
import { TodoListDoneItem } from './todoListDoneItem';
import style from '../styles/todoList.module.scss';
import { Pagenation } from './pagenationList';

interface TodoListProps {
  todos: Array<Todo>;
}

export const TodoDoneList: React.FC<TodoListProps> = ({ todos }) => {
  const [pag, setPags] = useState<Pag>({ start: 0, end: 5 });
  const [list, setLists] = useState<Array<number>>([]);

  useEffect(() => {
    let num = todos.length / 5;
    let temp = [];
    for (let i = 0; i < num; i++) {
      temp.push(i);
    }
    setLists(temp);
  }, [todos]);

  return (
    <section className={style.todoListSection}>
      <div className={style.todoListTitle}>
        <h3>To-done</h3>
      </div>

      {todos.length === 0 ? (
        <div className={style.todoListNone}>일합시다 일!</div>
      ) : (
        <div className={style.todoListWrapper}>
          <ul className={style.todoList}>
            {todos.slice(pag.start, pag.end).map((todo) => (
              <TodoListDoneItem key={todo.text} todo={todo} />
            ))}
          </ul>
        </div>
      )}
      {todos.length > 5 ? <Pagenation setPags={setPags} list={list} /> : null}
    </section>
  );
};
