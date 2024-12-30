import React from "react";
import { Button } from "react-bootstrap";
import "./ListTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListTask({ tasks, onDeleteTask }) {
  return (
    <ul className="list-group">
      {tasks.length === 0 && (
        <p className="para">
          <b>No tasks to show!</b>
        </p>
      )}
      {tasks.map((task, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {task}
          <Button variant="outline-warning" onClick={() => onDeleteTask(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
