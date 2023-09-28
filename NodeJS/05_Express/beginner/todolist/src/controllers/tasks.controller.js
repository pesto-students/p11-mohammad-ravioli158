const TaskModel = require("../models/tasks.model");

// Find all Tasks
exports.findAll = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll({ attributes: ["title", "status"] });
    console.log(tasks);
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting tasks" });
  }
};
// Create new Task
exports.create = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTask = await TaskModel.create({
      title,
      description,
      status,
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating task" });
  }
};

// find by Id
exports.findById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findByPk(id);
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting tasks" });
  }
};
// Update by Id
exports.update = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, status } = req.body;
    const task = await TaskModel.findByPk(taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    // Update the task properties
    task.title = title;
    task.description = description;
    task.status = status;
    // save the chnages
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating task" });
  }
};

// Delete a task
exports.delete = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await TaskModel.findByPk(taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    // Delete the task
    await task.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting task" });
  }
};
