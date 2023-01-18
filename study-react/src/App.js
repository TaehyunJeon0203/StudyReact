import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } 
    setToDo("");
    setTodos((currentArray) => [toDo, ...currentArray])
  };
  console.log(todos);
  return (
    <div>
      <h1>My ToDos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo..."
        />
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
