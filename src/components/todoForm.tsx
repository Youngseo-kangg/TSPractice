import React, { ChangeEvent, FormEvent, useState } from 'react';

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };
  return (
    <form>
      <input
        type='text'
        value={newTodo}
        placeholder='할일을 입력하세요'
        onChange={handleChange}
      />
      <button type='submit' onClick={handleSubmit}>
        추가하기
      </button>
    </form>
  );
};
