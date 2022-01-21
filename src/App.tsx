import React, { useState } from 'react';
import { TodoForm } from './components/todoForm';
import { TodoCurrList } from './components/todoCurrList';
import { TodoDoneList } from './components/todoDoneList';
import './styles/App.css';

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

  const removeTodoAll: RemoveTodoAll = () => {
    setTodos([]);
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
      <div id='AppWrapper'>
        <header className='AppHeader'>
          <h2>TODO App</h2>
        </header>
        <main>
          <TodoForm addTodo={addTodo} />
          <div className='listDivider'>
            <TodoCurrList
              todos={todos.filter((el) => !el.complete)}
              toggleComplete={toggleComplete}
              removeTodoAll={removeTodoAll}
            />
            <TodoDoneList
              todos={todos.filter((el) => el.complete)}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
