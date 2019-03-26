import React from "react";

interface TaskProps {
  taskTitle: string;
  taskId: number;
  taskType: string;
  links: Array<string>;
}

export const Task = (props: TaskProps) => {
  const renderLiks = (arr: string[]) => {
    return arr.map((item: string, index: number) => {
      return (
        <button key={index} className="btn btn-info m-2">
          {item}
        </button>
      );
    });
  };
  return (
    <div className="card p-3 my-4">
      <h4>{props.taskTitle}</h4>
      <div className="mb-2">ID: {props.taskId}</div>
      <div className="mb-2">Type: {props.taskType}</div>
      {renderLiks(props.links)}
    </div>
  );
};
