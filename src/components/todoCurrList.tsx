import React, { useEffect, useState } from 'react';
import { TodoListItem } from './todoListItem';
import style from '../styles/todoList.module.scss';
import { Pagenation } from '../components/pagenationList';

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
            {todos.slice(pag.start, pag.end).map((todo) => (
              <TodoListItem
                key={todo.text}
                todo={todo}
                moveToDone={moveToDone}
              />
            ))}
          </ul>
        </div>
      )}
      {todos.length > 5 ? <Pagenation setPags={setPags} list={list} /> : null}
    </section>
  );
};
