import { useEffect, useState } from "react";
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
  const [show, setShow] = useState(false);
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
    fetchTasks();
  }, []);

  const filtered =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div className="wrapper">
      {/* Dashboard */}
      <div className="card">
        <div className="header">Task Dashboard</div>

        <TaskTabs filter={filter} setFilter={setFilter} />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorState />
        ) : filtered.length === 0 ? (
          <EmptyState onAdd={() => setShow(true)} />
        ) : (
          filtered.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={async (id) => {
                await deleteTask(id);
                fetchTasks();
              }}
              onEdit={(task) => {
                setEditTask(task);
                setShow(true);
              }}
            />
          ))
        )}
      </div>

      {/* Create Panel */}
      <div className="card">
        <div className="header">Create Task</div>

        <button className="btn primary" onClick={() => setShow(true)}>
          Add Task
        </button>
      </div>

      <div className="card"></div>

      {/* Modal */}
      {show && (
        <TaskFormModal
          editTask={editTask}
          onClose={() => {
            setShow(false);
            setEditTask(null);
          }}
          onSubmit={async (data) => {
            if (editTask) {
              await updateTask(editTask._id, data);
            } else {
              await createTask(data);
            }
            fetchTasks();
          }}
        />
      )}
    </div>
  );
}

export default App;