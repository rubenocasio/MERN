import React from 'react'

function Todo(props) {
        const handleCheck = (idx) => {
            props.onCheck(idx);
        };

        const handleDelete = (idx) => {
            props.onDelete(idx);
        };

    return (
        <div>
        <h1>Todo Application</h1>
            <div>
        <ul>
            {props.todoList.map((item, i) => {let checkStatus;
            item.checked ? (checkStatus = "checked") : (checkStatus = "unchecked");
            return (
            <li key={i}>

            <input type="checkbox" onClick={() => handleCheck(i)} checked={item.checked} />

            <span className={[checkStatus]}>{item.content}</span>

            <button onClick={() => handleDelete(i)}>Delete</button>

        </li>);
        })}
        </ul>
        </div>
        </div>
    )
}

export default Todo