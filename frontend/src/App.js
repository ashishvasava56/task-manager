import { useEffect, useState } from "react";
import "./App.css";
import { getTasks, createTask, updateTask, deleteTask } from "./services/api";

import TaskTabs from "./components/task/TaskTabs";
import TaskCard from "./components/task/TaskCard";
import TaskFormModal from "./components/task/TaskFormModal";

import EmptyState from "./components/states/EmptyState";
import Loader from "./components/states/Loader";
import ErrorState from "./components/states/ErrorState";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks();
      setTasks(res.data);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Task Manager";
    fetchTasks();
  }, []);

  const filtered =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  const openCreateModal = () => {
    setEditTask(null);
    setShowModal(true);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-header">Task Dashboard</div>

        <div className="card-content">
          {/* Tabs + Add Button Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <TaskTabs filter={filter} setFilter={setFilter} />
            <button
              className="btn-primary-blue"
              style={{ padding: '7px 16px', fontSize: '12.5px' }}
              onClick={openCreateModal}
            >
              + Add Task
            </button>
          </div>

          {/* Content States */}
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorState />
          ) : tasks.length === 0 ? (
            <EmptyState onAdd={openCreateModal} />
          ) : (
            <div className="task-list">
              {filtered.length === 0 ? (
                <div className="state-center" style={{ padding: '40px 0' }}>
                  <p className="state-desc">No {filter} tasks found.</p>
                </div>
              ) : (
                filtered.map((task, index) => (
                  <div
                    key={task._id}
                    className="stagger-item"
                    style={{ animationDelay: `${index * 0.04}s` }}
                  >
                    <TaskCard
                      task={task}
                      onDelete={async (id) => {
                        await deleteTask(id);
                        fetchTasks();
                      }}
                      onEdit={(task) => {
                        setEditTask(task);
                        setShowModal(true);
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      <TaskFormModal
        isOpen={showModal}
        editTask={editTask}
        onClose={() => {
          setShowModal(false);
          setEditTask(null);
        }}
        onSubmit={async (data) => {
          if (editTask) {
            await updateTask(editTask._id, data);
          } else {
            await createTask(data);
          }
          setShowModal(false);
          setEditTask(null);
          fetchTasks();
        }}
      />
    </div>
  );
}

export default App;