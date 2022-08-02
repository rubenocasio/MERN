const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema(
    {
        author: {
        type: String,
        required: [true, "Hey you, you need to add a name"],
        minlength: [3, "You need at least 4 characters, idiot!"],
        maxlength: [50, "Too long did not read."],
        },
    } , { timestamps: true }
);

const Authors = mongoose.model("Authors", AuthorsSchema);

module.exports = Authors;
