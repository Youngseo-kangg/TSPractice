import React, { useState } from 'react';
import { TodoForm } from './components/todoForm';
import { TodoCurrList } from './components/todoCurrList';
import { TodoDoneList } from './components/todoDoneList';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (removeTodo) => {
    let newList = todos.filter((el) => el.text !== removeTodo);
    setTodos(newList);
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
        <TodoCurrList
          todos={todos.filter((el) => !el.complete)}
          toggleComplete={toggleComplete}
        />
        <TodoDoneList
          todos={todos.filter((el) => el.complete)}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
