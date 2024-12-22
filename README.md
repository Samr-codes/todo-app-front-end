
# 🚀 Todo App

A simple and interactive Todo App built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This app supports task creation, editing, and deletion with features like field validation and a confirmation dialog for deletions.

---

## Features

- Create tasks with a title and color.
- Edit existing tasks with pre-filled data.
- Delete tasks with a confirmation prompt.
- Interactive and responsive UI with Tailwind CSS.
- Frontend validation for user inputs.
- API routes for managing tasks.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Server & Client Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: API Routes (Mock Data)

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── todos/                  # API routes for task operations
│   │       └── route.ts           # Handles GET, POST, and PUT requests
│   ├── components/                # Shared components (Client Components)
│   │   ├── TodoList.tsx           # Interactive Todo List component
│   │   ├── CreateTaskButton.tsx   # Button to navigate to Create Task page
│   ├── create-task/               # Create Task page
│   │   └── page.tsx               # Form for creating a new task
│   ├── edit-task/                 # Edit Task page
│   │   └── page.tsx               # Form for editing an existing task
│   ├── page.tsx                   # Home page (Server Component)
│   ├── layout.tsx                 # Application layout
├── types/                         # TypeScript type definitions
│   └── todo.d.ts                  # Todo type interface
├── styles/                        # Global styles
│   └── globals.css                # Tailwind CSS configuration
└── tailwind.config.js             # Tailwind CSS configuration
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/todo-app-frontend.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## API Endpoints

### 1. **Get All Tasks**
- **Endpoint**: `/api/todos`
- **Method**: `GET`
- **Description**: Fetches all tasks.

### 2. **Create a Task**
- **Endpoint**: `/api/todos`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "Task Title",
    "color": "red"
  }
  ```
- **Description**: Creates a new task.

### 3. **Update a Task**
- **Endpoint**: `/api/todos/:id`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "title": "Updated Task Title",
    "color": "blue"
  }
  ```
- **Description**: Updates an existing task.

---

## Usage

1. **Home Page**:
   - Displays a list of tasks with options to mark as complete, edit, or delete.

2. **Create Task**:
   - Navigate to `/create-task` to add a new task.
   - Fill in the title and choose a color before saving.

3. **Edit Task**:
   - Click the edit icon on a task to navigate to `/edit-task`.
   - Modify the task details and save the changes.

4. **Delete Task**:
   - Click the delete icon on a task.
   - Confirm the deletion in the dialog box.

---

## Customization

### Tailwind CSS
Modify the styles in `tailwind.config.js` or override them in `globals.css`.

### API Logic
Update the mock API routes in `src/app/api/todos/route.ts` with real backend logic (e.g., database integration).

---

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Create Task Page
![Create Task](https://via.placeholder.com/800x400?text=Create+Task+Page)

### Edit Task Page
![Edit Task](https://via.placeholder.com/800x400?text=Edit+Task+Page)

---

