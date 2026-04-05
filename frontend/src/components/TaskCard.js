import React from "react";

function TaskCard({ task, onDelete, onStatus }) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.status}</p>

            <button onClick={() => onStatus(task)}>Change</button>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    );
}

export default TaskCard;