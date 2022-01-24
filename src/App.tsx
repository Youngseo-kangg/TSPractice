import { useState } from 'react';
import { TodoForm } from './components/todoForm';
import { TodoCurrList } from './components/todoCurrList';
import { TodoDoneList } from './components/todoDoneList';
import './styles/App.css';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todosDone, setTodosDone] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (removeTodo) => {
    // * todoDone에서 removeTodo들어온걸로 제외시키기
    let newList = todosDone.filter((el) => el.text !== removeTodo); // 제외한 리스트
    setTodosDone(newList);
  };

  const removeTodoAll: RemoveTodoAll = () => {
    // * todo 모두 없애기
    setTodos([]);
  };

  const moveToDone: MoveToDone = (selectedTodo) => {
    // * todo에서 todoDone으로 변경시키기
    const target = todos.filter((todo) => todo.text !== selectedTodo.text);
    setTodos(target); // todo에서 selected빠진걸로 업데이트
    setTodosDone([...todosDone, { text: selectedTodo.text, complete: true }]); // todoDone에 추가하기
  };

  const moveToDo: MoveToDo = (selectedTodo) => {
    const target = todosDone.filter((todo) => todo.text !== selectedTodo.text);
    setTodos([...todos, { text: selectedTodo.text, complete: false }]); // todo에서 selected빠진걸로 업데이트
    setTodosDone(target); // todoDone에 추가하기
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
              todos={todos}
              moveToDone={moveToDone}
              removeTodoAll={removeTodoAll}
            />
            <TodoDoneList
              todosDone={todosDone}
              moveToDo={moveToDo}
              removeTodo={removeTodo}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
