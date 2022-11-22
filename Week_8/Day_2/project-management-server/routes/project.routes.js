const router = require('express').Router();
const Project = require('../models/Project.model');

/* POST route so we can create something */

router.post('/projects', async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newProject = await Project.create({ title, description });

    /* Now that we don't have a render (because we don't have views) , we use res.json to send a json object */
    res.status(201).json(newProject);
  } catch (error) {
    //This res.json acts more like a console.log, not mandatory

    res.json(error);
    next(error);
  }
});

//Get all route

router.get('/projects', async (req, res, next) => {
  try {
    const allProjects = await Project.find().populate('tasks');
    //the name of the variable doesn't matter for the client
    res.status(200).json(allProjects);
  } catch (error) {
    next(error);
  }
});

//Get single project

router.get('/projects/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    // const id = req.params.id

    const singleProject = await Project.findById(id).populate('tasks');
    res.status(200).json(singleProject);
  } catch (error) {
    next(error);
  }
});

//Edit / Put route

router.put('/projects/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { title, description },
      //new: true gives us back the updated object instead of the old version
      { new: true }
    );

    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
});

//Delete route

router.delete('/projects/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await Project.findByIdAndRemove(id);

    res.status(200).json({ message: `The project with the id ${id} was deleted successfully` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
