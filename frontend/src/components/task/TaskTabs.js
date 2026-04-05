function TaskTabs({ filter, setFilter }) {
    const tabs = ["all", "pending", "in-progress", "completed"];
    const labels = { all: "All", pending: "Pending", "in-progress": "In Progress", completed: "Completed" };

    return (
        <div className="tabs">
            {tabs.map((t) => (
                <button
                    key={t}
                    className={filter === t ? "active" : ""}
                    onClick={() => setFilter(t)}
                >
                    {labels[t]}
                </button>
            ))}
        </div>
    );
}

export default TaskTabs;