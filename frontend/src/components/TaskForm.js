import React, { useState } from "react";

function TaskForm({ onCreate }) {
    const [title, setTitle] = useState("");

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => onCreate({ title })}>Add</button>
        </div>
    );
}

export default TaskForm;