function TaskCard({ task, onDelete, onStatus }) {
    return (
        <div className="task">
            <strong>{task.title}</strong>
            <p>{task.description}</p>

            <span className={`badge ${task.status}`}>
                {task.status}
            </span>

            <div style={{ marginTop: 10 }}>
                <button className="btn secondary">Edit</button>
                <button className="btn" onClick={() => onStatus(task)}>
                    Change
                </button>
                <button className="btn" onClick={() => onDelete(task._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskCard;