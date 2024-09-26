import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // State to store to-dos
  const [task, setTask] = useState('');   // State for current input

  // Function to add a new to-do
  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask(''); // Clear the input
    }
  };

  // Function to remove a to-do
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
