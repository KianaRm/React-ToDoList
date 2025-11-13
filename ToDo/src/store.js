import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./toDoSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
 reducer: {
 todos: todoReducer,
 theme: themeSlice
 },
});

export default store;