import { useState } from "react";

function CreateToDo(props) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  function updateTodo(event) {
    const { value, name } = event.target;
    setTodo((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={updateTodo}
          type="text"
          name="title"
          placeholder="Title"
          value={todo.title}
        />
        <textarea
          onChange={updateTodo}
          name="description"
          placeholder="Description"
          value={todo.description}
        />
        <button
          onClick={(event) => {
            props.onAddTodo(todo);
            event.preventDefault();
            setTodo({ title: "", description: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateToDo;
