# 🚀 Task Manager App (MERN Stack)

## 📌 Overview

This is a full-stack Task Management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, update, delete, and manage tasks with different statuses, featuring **professional URL synchronization** for state persistence and shareable links.

The application follows clean architecture, modular components, and proper API integration.

---

## ✨ Features

* ✅ **Create & Manage Tasks**: Full CRUD operations for task management.
* ✅ **Status Tracking**: Update tasks through `Pending`, `In Progress`, and `Completed` states.
* ✅ **Professional URL Routing**: Filter views (`/all`, `/pending`, etc.) are reflected in the URL for easy navigation.
* ✅ **Deep-Linked Modals**: The URL preserves modal states (`?modal=create`), allowing you to refresh without losing your work.
* ✅ **Rich UI/UX**: Includes a sleek, responsive design with high-fidelity components.
* ✅ **Content States**: Dedicated UI for **Loading (Skeleton)**, **Error**, and **Empty** states.
* ✅ **Browser Navigation**: Fully supports "Back" and "Forward" browser buttons for all filters.

---

## 🛠️ Tech Stack

### Frontend
* **React.js**: Core UI library.
* **React Router**: For advanced path-based routing and deep linking.
* **Axios**: For API communication.
* **Vanilla CSS**: Custom professional styling with a modern aesthetic.

### Backend
* **Node.js & Express.js**: RESTful API server.
* **MongoDB (Mongoose)**: NoSQL database for flexible task storage.
* **CORS & dotenv**: For secure communication and environment management.

---

## 📁 Project Structure

```
task-manager/
 ├── backend/
 │    ├── server.js         # API server & DB connection
 │    └── .env              # Environment secrets
 │
 ├── frontend/
 │    ├── public/           # Static assets
 │    ├── src/
 │    │    ├── components/  # Task, Layout, and State components
 │    │    ├── services/    # API abstraction (Axios)
 │    │    ├── App.js       # Root routing & state management
 │    │    └── index.css    # Global design tokens & styling
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 🔹 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npx nodemon server.js
```

Backend will run on: `http://localhost:5000`

---

### 🔹 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend will run on: `http://localhost:3000`

---

## 🔗 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | `/api/tasks`     | Get all tasks |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## ⚠️ Assumptions Made

* **No Authentication**: The system is designed as a single-user dashboard (single global task list).
* **Environment Configuration**: Assumes a valid MongoDB instance is available via the `MONGO_URI`.
* **State Management**: Uses React state synchronized with URL parameters for high performance and shareability.
* **Fixed Statuses**:
  * `pending`
  * `in-progress`
  * `completed`

---



## 🙌 Author

**Ashish Vasava**
