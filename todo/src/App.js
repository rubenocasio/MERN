import React, { useState } from "react";
import Todo from "./components/Todo";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addNewItem = (newItem) => {
    const newList = [newItem, ...todoList];
    setTodoList(newList);
  };

  const deleteItem = (idx) => {
    const newList = todoList.filter((item, i) => i !== idx);
    setTodoList(newList);
  };

  const checkOr = (idx) => {
    let newCheckState = !todoList[idx].checked;
    let newList = [...todoList];
    newList[idx].checked = newCheckState;
    setTodoList(newList);
  };

  return (
    <div className="App">
      <Input onNewItem={addNewItem} />
      <Todo todoList={todoList} onDelete={deleteItem} onCheck={checkOr} />
    </div>
  );
}

export default App;
