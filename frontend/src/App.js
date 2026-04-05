import React, { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, updateTask } from "./services/api";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (data) => {
    await createTask(data);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleStatus = async (task) => {
    const newStatus =
      task.status === "pending" ? "completed" : "pending";
    await updateTask(task._id, { status: newStatus });
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onCreate={handleCreate} />

      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={handleDelete}
          onStatus={handleStatus}
        />
      ))}
    </div>
  );
}

export default App;