import React from "react";

function DeletedTasks({ tasks }) {
  return (
    <div>
      <h3>Deleted Tasks</h3>
      <hr />
      {tasks.length === 0 ? (
        <p>No deleted tasks!</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DeletedTasks;
