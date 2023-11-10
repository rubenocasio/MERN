const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "You need a Pirate name."],
    },
    img:{
        type: String,
        required:[true, "You need an Image Url."],
    },
    treasure:{
        type: Number,
        required:[true, "You need to select the amount of treasures."],
    },
    phrase: {
        type: String,
        required:[true, "You need to give a Pirate catch phrase."],
    },
    position: {
        type: String,
        required:[true, "You need to select a crew position."],
    },
    peg: {
        type: Boolean,
        default: true
    },
    eye: {
        type: Boolean,
        default: true
    },
    hook: {
        type: Boolean,
        default: true
    }
}, {timestamps:true})

const Pirates = mongoose.model("Pirates", PirateSchema);


module.exports = Pirates;