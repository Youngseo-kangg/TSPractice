import { useAppSelector } from './app/hooks';
import { todoStatus } from './features/todoSlice';
import { TodoForm } from './components/todoForm';
import { TodoCurrList } from './components/todoCurrList';
import { TodoDoneList } from './components/todoDoneList';
import './styles/App.css';

function App() {
  const count = useAppSelector(todoStatus);
  // const [todos, setTodos] = useState<Array<Todo>>([]);
  // const addTodo: AddTodo = (newTodo) => {
  //   if (newTodo !== '') {
  //     setTodos([...todos, { text: newTodo, complete: false }]);
  //   }
  // };

  // const removeTodo: RemoveTodo = (removeTodo) => {
  //   // * todoDone에서 removeTodo들어온걸로 제외시키기
  //   let newList = todos.filter((el) => el.text !== removeTodo); // 제외한 리스트
  //   setTodos(newList);
  // };

  // const removeTodoAll: RemoveTodoAll = () => {
  //   // * complete:false인 상태 모두 없애기
  //   const target = todos.filter((todo) => todo.complete !== false);
  //   setTodos(target);
  // };

  // const moveToDone: MoveToDone = (selectedTodo) => {
  //   // * complete:true로 변경시키기
  //   const target = todos.filter((el) => {
  //     if (el.text === selectedTodo.text) {
  //       el.complete = true;
  //       return true;
  //     } else return true;
  //   });
  //   setTodos(target);
  // };

  // const moveToDo: MoveToDo = (selectedTodo) => {
  //   // * complete:false로 변경시키기
  //   const target = todos.filter((el) => {
  //     if (el.text === selectedTodo.text) {
  //       el.complete = false;
  //       return true;
  //     } else return true;
  //   });
  //   setTodos(target);
  // };

  return (
    <div className='App'>
      <div id='AppWrapper'>
        <header className='AppHeader'>
          <h2>TODO App</h2>
        </header>
        <main>
          <TodoForm />
          <div className='listDivider'>
            <TodoCurrList
              todos={count.todo.filter((todo) => todo.complete === false)}
            />
            <TodoDoneList
              todos={count.todo.filter((todo) => todo.complete === true)}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
