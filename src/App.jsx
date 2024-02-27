import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import CreateToDo from "./Components/CreateToDo";

function App() {
  return (
    <div>
      <Header />
      <CreateToDo />
    </div>
  );
}

export default App;
