import React from "react";
import { Task } from "./task";

interface DashboardColumnProps {
  title: string;
  taskTitle?: string;
  taskType?: string;
  taskId?: number;
  tasks?: any;
}
export const DashboardColumn = (props: DashboardColumnProps) => {
  const renderTasks = (arr: any) => {
    return arr[1].items.map((item: any) => {
      return (
        <Task
          key={item.id}
          taskTitle={item.title}
          taskType={item.type}
          taskId={item.id}
          links={arr[0].linkNames}
        />
      );
    });
  };
  return props.tasks.length ? (
    <div className="col-11 col-sm-6 col-md-4 col-lg-2 border h-100 m-1">
      <h2 className="mt-2">{props.title}</h2>
      <div>{renderTasks(props.tasks)}</div>
    </div>
  ) : null;
};
