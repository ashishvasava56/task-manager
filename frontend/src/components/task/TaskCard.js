function TaskCard({ task, onDelete, onEdit }) {
    const badgeClass = 
        task.status === 'in-progress' ? 'badge-progress' :
        task.status === 'completed' ? 'badge-completed' : null;

    const badgeLabel = 
        task.status === 'in-progress' ? 'In Progress' :
        task.status === 'completed' ? 'Completed' : null;

    return (
        <div className="task-item">
            <div className="task-body">
                <span className="task-title">{task.title}</span>
                <span className="task-desc">{task.description}</span>
            </div>
            <div className="task-right">
                {badgeClass && <span className={badgeClass}>{badgeLabel}</span>}
                <button className="btn-secondary-white" onClick={() => onEdit(task)}>Edit</button>
                <button className="btn-secondary-white" onClick={() => onDelete(task._id)}>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;