"use client";

import { useState } from "react";
import { Todo } from "@/types/todo";

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const [taskList, setTaskList] = useState(todos);

  const [showDeleteDialog, setShowDeleteDialog] = useState<number | null>(null);


  const toggleComplete = (id: number) => {
    setTaskList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  };

  const handleDelete = (id: number) => {
    setTaskList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setShowDeleteDialog(null);

  };

  const completedCount = taskList.filter((todo) => todo.completed).length;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tasks ({taskList.length})</h2>
        <p>
          Completed: {completedCount} of {taskList.length}
        </p>
      </div>

      {taskList.length === 0}{
        <p className="text-gray-400">No tasks</p>
      }

      <ul className="space-y-4">
        {taskList.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between bg-gray-700 p-4 rounded-lg ${
              todo.completed ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="form-checkbox text-blue-500"
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.task}
              </span>
            </div>
            <button
                onClick={() => setShowDeleteDialog(todo.id)}
                className="text-red-500 hover:text-red-700"
                title="Delete Task"
              >
                🗑️
              </button>
          </li>
        ))}
      </ul>
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-white mb-4">Are you sure you want to delete this task?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteDialog(null)}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                No
              </button>
              <button
                onClick={() => handleDelete(showDeleteDialog!)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
