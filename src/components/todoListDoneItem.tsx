import React from 'react';
import style from '../styles/todoListItem.module.scss';
import { useAppDispatch } from '../app/hooks';
import { removeTodo, moveToDo } from '../features/todoSlice';
import Swal from 'sweetalert2';

interface todoPropsDone {
  todo: Todo;
}

export const TodoListDoneItem: React.FC<todoPropsDone> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const deleteTodo: RemoveTodo = (todo: Todo) => {
    dispatch(removeTodo(todo));
    Swal.fire({
      title: 'To-done에서 항목을 삭제했습니다.',
      text: '다른 일도 정리해보세요.',
      icon: 'success',
    });
  };

  const reviveTodo: ReviveTodo = (todo: Todo) => {
    dispatch(moveToDo(todo));
    Swal.fire({
      title: 'todo로 항목을 이동했습니다.',
      text: '다시 일을 끝내보세요.',
      icon: 'success',
    });
  };
  return (
    <li
      className={
        todo.complete
          ? `${style.listItemDone} ${style.completed}`
          : `${style.listItemDone} ${style.current}`
      }
    >
      <p>{todo.text}</p>
      <div className={style.itemBtnWrapper}>
        <button className={style.itemBtn} onClick={() => deleteTodo(todo)}>
          지우기
        </button>
        <button className={style.itemBtn} onClick={() => reviveTodo(todo)}>
          다시하기
        </button>
      </div>
    </li>
  );
};
