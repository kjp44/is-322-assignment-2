import React from "react";

export const Task = () => {
  return (
    <div className="card p-3">
      <h4>This is a task</h4>
      <div className="mb-2">ID: 10</div>
      <div className="mb-2">Type: feature</div>
      <button className="btn btn-primary w-50">Start Work</button>
    </div>
  );
};
