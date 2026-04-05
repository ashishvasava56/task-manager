function EmptyState({ onAdd }) {
    return (
        <div className="empty-state-container">
            <div className="empty-illustration-placeholder">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <rect x="22" y="10" width="56" height="70" rx="4" stroke="#ccc" strokeWidth="2" fill="white"/>
                    <line x1="32" y1="30" x2="68" y2="30" stroke="#ddd" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="32" y1="42" x2="68" y2="42" stroke="#ddd" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="32" y1="54" x2="55" y2="54" stroke="#ddd" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="72" cy="72" r="18" fill="white" stroke="#ccc" strokeWidth="2"/>
                    <path d="M63 72L69 78L81 66" stroke="#aaa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
            </div>
            <h3 className="empty-state-title">No tasks found</h3>
            <p className="empty-state-desc">Get started by creating a new task!</p>
            <button className="btn-primary-blue" onClick={onAdd}>Add Task</button>
        </div>
    );
}

export default EmptyState;