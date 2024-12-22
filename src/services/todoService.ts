import {TodoTaskList, Todo} from "../types/todo"

export const fetchTodos = async (): Promise<TodoTaskList[]> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/tasks');
    return response.json();
  };
  
  export const createTodo = async (task: string): Promise<Todo> => {
    // Mock API for creating a task
    return { id: Math.random(), task, completed: false };
  };
  
  export const deleteTask = async (task: string): Promise<Todo> => {
    // Mock API for creating a task
    return { id: Math.random(), task, completed: false };
  };