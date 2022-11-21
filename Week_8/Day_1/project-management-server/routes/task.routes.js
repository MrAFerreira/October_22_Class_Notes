const router = require('express').Router();
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

//Post Task

router.post('/tasks', async (req, res, next) => {
  try {
    const { title, description, projectId } = req.body;
    //Create the task
    //Since the model has the field project and NOT projectId, we need to rename it
    const newTask = await Task.create({ title, description, project: projectId });

    await Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask._id } });

    //201 means Created
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
