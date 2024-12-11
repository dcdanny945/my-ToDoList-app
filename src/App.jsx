import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoItems from './ToDoItems'

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoItemsLi, setToDoItems] = useState([]);

  function handleChange(event) {
    const newUserInput = event.target.value;
    setInputText(newUserInput);
  }
  function handleClicked() {
    setToDoItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        < ToDoItems hereIsProps = {toDoItemsLi} />
        {/* <ul>
          {toDoItems.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default App;
