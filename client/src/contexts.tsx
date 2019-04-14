import React, { createContext } from "react";

export interface AppContextInterface {
  to_do?: Array<object>;
  in_progress?: Array<object>;
  review?: Array<object>;
  done?: Array<object>;
  updateListState(type: string, newItem: object): void;
}

export const TaskContext = createContext<AppContextInterface | null>(null);
