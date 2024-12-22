import { useState } from "react";
import { Todo } from "../types/todo";

export const useTodos = (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, toggleComplete, deleteTask, setTodos };
};
