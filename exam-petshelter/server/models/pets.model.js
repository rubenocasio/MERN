const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Hey you need a name"],
        minlength:[3, "Need more input."],
        maxlength:[50, "Too long did not read."],
    },
    type:{
        type: String,
        required:[true, "Hey you need a type of Pet, fool!"],
        minlength:[3, "Need more input."],
        maxlength:[50, "Too long did not read."],
    },
    description:{
        type: String,
        required:[true, "Hey you need to give a description of your pet fool."],
        minlength:[3, "Need more input."],
        maxlength:[50, "Too long did not read."],
    },
    skill1: {
        type: String,
        required:[true, "Hey you need to give a description of your pet fool."],
        minlength:[3, "Need more input."],
        maxlength:[50, "Too long did not read."],
    },
    skill2: {
        type: String,
        required:[true, "Hey you need to give a description of your pet fool."],
        minlength:[3, "Need more input."],
        maxlength:[50, "Too long did not read."],
    },
    skill3: {
        type: String,
        required:[true, "Hey you need to give a description of your pet fool."],
        minlength:[3, "Need more input."],
        maxlength:[50, "Too long did not read."],
    }
}, {timestamps:true})

const Pet = mongoose.model("Pet", PetSchema);


module.exports = Pet;