import React, { useState } from 'react';
import { TodoForm } from './components/todoForm';
import { TodoList } from './components/todoList';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };
  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>TODO App</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} />
      </header>
    </div>
  );
}

export default App;
