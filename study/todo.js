import {useState} from "react";


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();

    if(todo === ""){
      return
    }
    setTodo("");
    setTodos((current) => {
      return [todo, ...current]
    })
  } 


  return (
    <div className="App">
      <h1>My to Dos ({todos.length})</h1>
      <input value={todo} type="text" onChange={onChange}/>
      <button onClick={onSubmit}>Add todo</button>
      <ul>
        {todos.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
