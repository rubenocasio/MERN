const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Please add a title."],
        minlength:[3, "You need at least 4 characters, idiot!"],
        maxlength:[50, "Too long did not read."],
    },
    price:{
        type:Number,
        required:[true, "Please add a Price."],
        // minlength:[3, "You need at least 4 characters, idiot!"],
        // maxlength:[50, "Too long did not read."],
    },
    description:{
        type:String,
        required:[true, "Please add a description"],
        minlength:[2, "You need at least 4 characters, idiot!"],
        maxlength:[3, "Too long did not read."],
    }
}, {timestamps: true})

const Projects = mongoose.model("projects", ProjectsSchema);

module.exports = Projects;
