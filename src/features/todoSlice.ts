import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface TodoState {
  todo: Array<Todo>;
}

const initialState: TodoState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      if (action.payload.text !== '') {
        state.todo.push({ text: action.payload.text, complete: false });
      }
    },
    removeTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = state.todo.filter((el) => el.text !== action.payload.text);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    removeTodoAll: (state) => {
      state.todo = [];
    },
    moveToDone: (state, action: PayloadAction<Todo>) => {
      state.todo = state.todo.filter((el) => {
        if (el.text === action.payload.text) {
          el.complete = true;
          return true;
        } else return true;
      });
    },
    moveToDo: (state, action: PayloadAction<Todo>) => {
      state.todo = state.todo.filter((el) => {
        if (el.text === action.payload.text) {
          el.complete = false;
          return true;
        } else return true;
      });
    },
  },
});

export const { addTodo, removeTodo, removeTodoAll, moveToDone, moveToDo } =
  todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const todoStatus = (state: RootState) => state.todo;

export default todoSlice.reducer;
