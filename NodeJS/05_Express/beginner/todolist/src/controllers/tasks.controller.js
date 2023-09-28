const TaskModel = require("../models/tasks.model");

// Find all Tasks
exports.findAll = async (req, res, next) => {
  try {
    const tasks = await TaskModel.findAll({ attributes: ["title", "status"] });
    console.log(tasks);
    res.status(200).json(tasks);
  } catch (error) {
    next(error.message);
  }
};
// Create new Task
exports.create = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const newTask = await TaskModel.create({
      title,
      description,
      status,
    });
    res.status(201).json(newTask);
  } catch (error) {
    next(error.message);
  }
};

// find by Id
exports.findById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findByPk(id);
    res.status(200).json(task);
  } catch (error) {
    next(error.message);
  }
};
// Update by Id
exports.update = async (req, res, next) => {
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
    next(error.message);
  }
};

// Delete a task
exports.delete = async (req, res, next) => {
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
    next(error.message);
  }
};
