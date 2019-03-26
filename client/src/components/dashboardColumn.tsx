import React from "react";
import { Task } from "./task";

interface DashboardColumnProps {
  title: string;
  taskTitle?: string;
  taskType?: string;
  taskId?: number;
  tasks?: Array<object>;
}
export const DashboardColumn = (props: DashboardColumnProps) => {
  const renderTasks = (arr: any) => {
    return arr.map((item: any, index: number) => {
      return (
        <Task
          key={item.id}
          taskTitle={item.title}
          taskType={item.type}
          taskId={item.id}
        />
      );
    });
  };
  console.log(props);
  return (
    <div className="col-md-3 border h-100">
      <h2 className="m-3">{props.title}</h2>
      <div>{renderTasks(props.tasks)}</div>
    </div>
  );
};
