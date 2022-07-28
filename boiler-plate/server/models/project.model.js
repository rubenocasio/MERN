const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
});

const Projects = mongoose.model("projects", ProjectsSchema);

module.exports = Projects;
