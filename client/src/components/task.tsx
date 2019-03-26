import React from "react";

interface TaskProps {
  taskTitle: string;
  taskId: number;
  taskType: string;
}

export const Task = (props: TaskProps) => {
  return (
    <div className="card p-3 my-4">
      <h4>{props.taskTitle}</h4>
      <div className="mb-2">ID: {props.taskId}</div>
      <div className="mb-2">Type: {props.taskType}</div>
      <button className="btn btn-primary w-50">Start Work</button>
    </div>
  );
};
