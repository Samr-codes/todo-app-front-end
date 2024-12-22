export interface Todo {
    id: number;
    task: string;
    completed: boolean;
  }
  
  export interface TodoTaskList {
    [key: number]: Todo; // A mapping of numbers (keys) to Todo objects
  }
  