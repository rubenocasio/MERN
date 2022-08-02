const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema({
    authors:{
        type: String,
        required:[true, "Please add a title."],
        minlength:[3, "You need at least 4 characters, idiot!"],
        maxlength:[50, "Too long did not read."],
    },
}, {timestamps: true})

const Authors = mongoose.model("authors", AuthorsSchema);

module.exports = Authors;
