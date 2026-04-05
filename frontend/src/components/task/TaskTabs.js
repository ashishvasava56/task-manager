function TaskTabs({ filter, setFilter }) {
    const tabs = ["all", "pending", "in-progress", "completed"];

    return (
        <div className="tabs">
            {tabs.map((t) => (
                <button
                    key={t}
                    className={filter === t ? "active" : ""}
                    onClick={() => setFilter(t)}
                >
                    {t}
                </button>
            ))}
        </div>
    );
}

export default TaskTabs;