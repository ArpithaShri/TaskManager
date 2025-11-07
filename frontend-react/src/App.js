// src/App.js
import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import api from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => setTasks((prev) => [...prev, newTask]);
  const handleTaskDeleted = (id) =>
    setTasks((prev) => prev.filter((t) => t._id !== id));

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Task Manager (React)</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      {loading ? <p>Loading tasks...</p> : <TaskList tasks={tasks} onTaskDeleted={handleTaskDeleted} />}
    </div>
  );
}

export default App;
