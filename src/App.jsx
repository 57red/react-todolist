import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import CreateToDo from "./Components/CreateToDo";
import ToDo from "./Components/ToDo";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  }

  return (
    <div>
      <Header />
      <CreateToDo onAddTodo={addTodo} />
      {todos.map((todo, index) => {
        return (
          <ToDo key={index} title={todo.title} description={todo.description} />
        );
      })}
    </div>
  );
}

export default App;
