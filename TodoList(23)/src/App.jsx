import React, { useState } from "react";
import Todo from "./components/Todo";
import Input from "./components/Input";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([]);

    const addNewItem = (newItem) => {
        setTodoList([newItem, ...todoList]);
    };

    const deleteItem = (idx) => {
        //in the event someone looks at my code and wants to know what the underscore
        //means in my callback function. Since the CB takes two params and the first one
        //isn't being used/not needed its just a placeholder. It helps make the code clearer
        //to someone reading it, like you.
        setTodoList(todoList.filter((_, i) => i !== idx));
    };

    const checkOr = (idx) => {
        setTodoList(todoList.map((item, i) => 
            i === idx ? { ...item, checked: !item.checked } : item
        ));
    };

    return (
        <div className="App">
            <h1>Todo Application</h1>
            <Input onNewItem={addNewItem} />
            <Todo todoList={todoList} onDelete={deleteItem} onCheck={checkOr} />
        </div>
    );
}

export default App;
