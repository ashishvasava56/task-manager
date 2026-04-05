# 🚀 Task Manager App (MERN Stack)

## 📌 Overview

This is a full-stack Task Management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, update, delete, and manage tasks with different statuses, featuring **professional URL synchronization** for state persistence and shareable links.

The application follows clean architecture, modular components, and proper API integration.

---

## 🌐 Live Demo

🔗 https://task-manager-tan-iota.vercel.app/

---

## 🎥 Demo Video

A walkthrough of the application demonstrating all features:

🔗 https://drive.google.com/file/d/1u398H4z-48fY0SPTm1CyDvtvQe3n9XsH/view?usp=drive_link

---

## ✨ Features

* ✅ **Create & Manage Tasks**: Full CRUD operations for task management
* ✅ **Status Tracking**: Update tasks through `Pending`, `In Progress`, and `Completed` states
* ✅ **Professional URL Routing**: Filter views (`/all`, `/pending`, etc.) reflected in URL
* ✅ **Deep-Linked Modals**: Modal states (`?modal=create`) preserved on refresh
* ✅ **Rich UI/UX**: Clean, responsive UI based on Figma design
* ✅ **Content States**: Loading (Skeleton), Error, and Empty states
* ✅ **Browser Navigation**: Supports Back/Forward navigation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Vanilla CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* CORS & dotenv

---

## 📁 Project Structure

```
task-manager/
 ├── backend/
 │    ├── server.js         # API server & DB connection
 │    └── .env              # Environment variables
 │
 ├── frontend/
 │    ├── public/
 │    ├── src/
 │    │    ├── components/
 │    │    ├── services/
 │    │    ├── App.js
 │    │    └── index.css
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

Backend will run on:
http://localhost:5000

---

### 🔹 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend will run on:
http://localhost:3000

---

## 🔗 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/tasks     | Get all tasks     |
| POST   | /api/tasks     | Create a new task |
| PUT    | /api/tasks/:id | Update task       |
| DELETE | /api/tasks/:id | Delete task       |

---

## ⚠️ Assumptions Made

* No authentication (single-user system)
* MongoDB connection provided via `.env`
* Fixed status values:

  * `pending`
  * `in-progress`
  * `completed`
* Focus on clean UI and functionality over complex features

---

## 🌐 Deployment

* Frontend deployed on **Vercel**
* Backend can be deployed on **Render**

---

## 🙌 Author

**Ashish Vasava**
Full Stack Developer (MERN)
Ahmedabad, India

---

