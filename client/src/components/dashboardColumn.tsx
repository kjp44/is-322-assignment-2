import React from "react";
import {Task} from "./task";

interface DashboardColumnProps {
  title: string;
  taskTitle?: string;
  taskType?: string;
  id?: number;
}
export const DashboardColumn = (props: DashboardColumnProps) => {
  return (
    <div className="col-md-3 border h-100">
      <h2 className="m-3">{props.title}</h2>
      {props.taskTitle ? (
        <div>Exists!</div>
      ) : (
        <div className="mx-3"><Task/></div>
      )}
    </div>
  );
};
