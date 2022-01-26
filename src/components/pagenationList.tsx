import react, { useState } from 'react';
import style from '../styles/todoList.module.scss';

interface PagenationProps {
  list: Array<number>;
  setPags: SetPags;
}
export const Pagenation: React.FC<PagenationProps> = ({ list, setPags }) => {
  return (
    <div className={style.todoListPagWrapper}>
      <ul className={style.todoListPag}>
        {list.map((el: number, idx: number) => {
          return (
            <li
              key={idx}
              onClick={() => setPags({ start: el * 5, end: el * 5 + 5 })}
            >
              {idx + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
