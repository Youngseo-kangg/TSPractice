type AddTodo = (newTodo: string) => void;
type RemoveTodo = (removeTodo: string) => void;
type RemoveTodoAll = () => void;
type Todo = {
  text: string;
  complete: boolean;
};
type Pag = {
  start: number;
  end: number;
};
type SetPags = (selectedTodo: Pag) => void;
type MoveToDone = (selectedTodo: Todo) => void;
type MoveToDo = (selectedTodo: Todo) => void;
