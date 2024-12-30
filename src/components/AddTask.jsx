import React, { useState } from "react";
import { Button } from "react-bootstrap";

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState(""); // State to manage task input

  const handleSubmit = () => {
    onAddTask(newTask); // Add the task using the parent function
    setNewTask(""); // Clear the input field
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="form-control mb-2"
      />
      <Button className="btn-primary" onClick={handleSubmit}>
        Add Task
      </Button>
    </div>
  );
}

export default AddTask;
