"use client";

import { useRouter } from 'next/navigation';

export const CreateTaskButton = () => {

    const router = useRouter();

    const handleCreateTask = () => {
        console.log("Create Task button clicked!");

        router.push('/create-task'); // Use router.push after async logic
        // You can add navigation logic or modal opening here
    };

  return (
    <button
      onClick={handleCreateTask}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-6"
    >
      Create Task
    </button>
  );
};
