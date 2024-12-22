"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTaskPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const validate = (): boolean => {
    if (!title.trim()) {
      setError("Title is required.");
      return false;
    }
    if (!color) {
      setError("Color is required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = async () => {
    if (!validate()) return;

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/tasks' , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, color }),
      });

      if (!response.ok) {
        throw new Error("Failed to create task.");
      }

      router.push("/");
    } catch (err) {
      setError(` Failed to create task. Please try again: ${err}`);
    }
  };

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <header className="w-full py-6 bg-gray-800 text-center">
        <h1 className="text-3xl font-bold text-blue-400">🚀 Todo App</h1>
      </header>

      <main className="flex-grow w-full max-w-2xl px-4 py-8">
        <button
          onClick={() => router.push("/")}
          className="text-blue-500 hover:underline mb-6"
        >
          ← Back
        </button>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Create Task</h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Color</label>
            <div className="flex space-x-4">
              {colors.map((clr) => (
                <button
                  key={clr}
                  type="button"
                  onClick={() => setColor(clr)}
                  className={`w-10 h-10 rounded-full ${
                    color === clr ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: clr }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save ✓
          </button>
        </div>
      </main>
    </div>
  );
}
