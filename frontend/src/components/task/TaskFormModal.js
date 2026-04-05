import { useState, useEffect } from "react";

function TaskFormModal({ onClose, onSubmit, editTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");

    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDescription(editTask.description);
            setStatus(editTask.status);
        }
    }, [editTask]);

    return (
        <div className="modal">
            <div className="modal-box">
                <h3>{editTask ? "Edit Task" : "Create Task"}</h3>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <div style={{ marginTop: 10 }}>
                    <button className="btn secondary" onClick={onClose}>
                        Cancel
                    </button>

                    <button
                        className="btn primary"
                        onClick={() => {
                            onSubmit({ title, description, status });
                            onClose();
                        }}
                    >
                        {editTask ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskFormModal;