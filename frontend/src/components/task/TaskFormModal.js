import { useState, useEffect } from "react";

function TaskFormModal({ isOpen, onClose, onSubmit, editTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        if (isOpen) {
            if (editTask) {
                setTitle(editTask.title || '');
                setDescription(editTask.description || '');
                setStatus(editTask.status || 'pending');
            } else {
                setTitle('');
                setDescription('');
                setStatus('pending');
            }
        }
    }, [editTask, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, status });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{editTask ? 'Edit Task' : 'Create Task'}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div style={{ marginBottom: '16px' }}>
                            <label className="form-label">Title</label>
                            <input 
                                className="form-input"
                                type="text" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required 
                                placeholder="Enter task title"
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label className="form-label">Description</label>
                            <textarea 
                                className="form-input"
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                required 
                                rows={3}
                                placeholder="Enter task description"
                                style={{ resize: 'vertical' }}
                            />
                        </div>
                        <div>
                            <label className="form-label">Status</label>
                            <select 
                                className="form-input"
                                value={status} 
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn-secondary-white" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-primary-blue">{editTask ? 'Save' : 'Create'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskFormModal;