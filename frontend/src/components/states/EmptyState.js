function EmptyState({ onAdd }) {
    return (
        <div style={{ textAlign: "center", padding: 40 }}>
            <h3>No tasks found</h3>
            <p>Get started by creating a new task!</p>

            <button className="btn primary" onClick={onAdd}>
                Add Task
            </button>
        </div>
    );
}

export default EmptyState;