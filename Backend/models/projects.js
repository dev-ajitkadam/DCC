const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  number: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = ProjectModel;
