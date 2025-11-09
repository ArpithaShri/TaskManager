// src/components/TaskList.js
import React from "react";
import api from "../services/api";

const TaskList = ({ tasks, onTaskDeleted }) => {
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      onTaskDeleted(id);
    } catch (err) {
      console.error("Error deleting task:", err);
      alert("Failed to delete task.");
    }
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#f9f9f9",
            padding: "10px",
            margin: "5px 0",
            borderRadius: "8px",
          }}
        >
          <div>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
          <button onClick={() => handleDelete(task._id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

