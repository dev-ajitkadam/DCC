// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
const ProjectModel = require('../models/projects');

// Endpoint to approve a project
router.put('/:projectId/approve', async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findByIdAndUpdate(projectId, { status: 'approved' }, { new: true });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to assign a site engineer to a project
router.put('/:projectId/assignEngineer', async (req, res) => {
  const { projectId } = req.params;
  const { engineerId } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(projectId, { assignedEngineer: engineerId }, { new: true });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to add a project
router.post('/addproject',  async (req, res) => {
  try {
      const { name, address ,email , number } = req.body;
      await ProjectsModel.create({ name, address,email, number });
      res.json({ status: 'success' });
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/getprojects', async (req, res) => {
  try {
      const projests = await ProjectModel.find();
      res.send(projests);
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
