import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { removeTodoAll } from '../features/todoSlice';
import { TodoListItem } from './todoListItem';
import style from '../styles/todoList.module.scss';
import { Pagenation } from '../components/pagenationList';
import Swal from 'sweetalert2';

interface TodoListProps {
  todos: Array<Todo>;
}

export const TodoCurrList: React.FC<TodoListProps> = ({ todos }) => {
  const [pag, setPags] = useState<Pag>({ start: 0, end: 5 });
  const [list, setLists] = useState<Array<number>>([]);
  const dispatch = useAppDispatch();
  const deleteAll: RemoveTodoAll = () => {
    Swal.fire({
      title: 'todo 목록을 전체삭제 하시겠습니까?',
      text: '삭제후에 되돌릴 수 없습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네. 삭제하겠습니다',
      cancelButtonText: '아니오',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(removeTodoAll());
        Swal.fire(
          '삭제되었습니다.',
          'todo 항목들이 삭제되었습니다.',
          'success'
        );
      }
    });
  };

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
      <div
        className={
          todos.length === 0 ? style.todoListTitle : style.todoListTitleWithBtn
        }
      >
        <h3>To-do</h3>
        {todos.length !== 0 && <button onClick={deleteAll}>모두 없애기</button>}
      </div>

      {todos.length === 0 ? (
        <div className={style.todoListNone}>할일을 새로 추가해보세요!</div>
      ) : (
        <div className={style.todoListWrapper}>
          <ul className={style.todoList}>
            {todos.slice(pag.start, pag.end).map((todo) => (
              <TodoListItem key={todo.text} todo={todo} />
            ))}
          </ul>
        </div>
      )}
      {todos.length > 5 ? <Pagenation setPags={setPags} list={list} /> : null}
    </section>
  );
};
