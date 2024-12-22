import { TodoList } from "../app/components/TodoList";
import { CreateTaskButton } from "@/app/components/CreateTaskButton";

export default async function Home() {

  const todos = [
    { id: 1, task: "Learn Next.js Server Components", completed: false },
    { id: 2, task: "Build a Todo App", completed: true },
    { id: 3, task: "Deploy to Vercel", completed: false },
    { id: 4, task: "Optimize Performance", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <header className="w-full py-6 bg-gray-800 text-center">
        <h1 className="text-3xl font-bold text-blue-400">🚀 Todo App</h1>
      </header>

      <main className="flex-grow w-full max-w-4xl px-4 py-8">
        <CreateTaskButton />

        <TodoList todos={todos} />
      </main>
    </div>
  );
}
