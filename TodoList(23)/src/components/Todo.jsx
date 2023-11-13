import React from 'react'

function Todo({ todoList, onDelete, onCheck }) {
    return (
        <div>
            <ul>
                {todoList.map((item, i) => (
                    <li key={i}>
                        <input
                            type="checkbox"
                            onChange={() => onCheck(i)}
                            checked={item.checked}
                        />
                        <span className={item.checked ? "checked" : "unchecked"}>
                            {item.content}
                        </span>
                        <button onClick={() => onDelete(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
