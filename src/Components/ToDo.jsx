function ToDo(props) {
  return (
    <div className="todo">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>DELETE</button>
    </div>
  );
}

export default ToDo;
