import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

function App() {
  return (
    <div className="App">
      <h1>Todo List - WITH REDUX!!</h1>
      <h2>Quack, Quack!!</h2>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
