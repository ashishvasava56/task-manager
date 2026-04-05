const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors()); // Allow all origins for easier initial deployment
app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Model
const Task = mongoose.model("Task", {
    title: String,
    description: String,
    status: String,
    createdAt: { type: Date, default: Date.now }
});

// Welcome Route
app.get("/", (req, res) => {
    res.json({ message: "Task Manager API is running!" });
});

// Routes
app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

app.post("/api/tasks", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: "Failed to create task" });
    }
});

app.put("/api/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: "Failed to update task" });
    }
});

app.delete("/api/tasks/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete task" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));