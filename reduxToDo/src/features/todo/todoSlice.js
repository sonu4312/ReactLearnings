import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, text: "Hi" }] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions; // this need to export to use the actions as individually

export const todoReducer = todoSlice.reducer;
