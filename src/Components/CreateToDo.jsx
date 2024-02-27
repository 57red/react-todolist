function CreateToDo() {
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="description" placeholder="Description" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateToDo;
