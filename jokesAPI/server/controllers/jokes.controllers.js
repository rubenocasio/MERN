const Jokes = require("../models/jokes.model");

module.exports.findAll = (req, res) => {
    console.log("Is this working or not?")
    Jokes.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong with find all", error: err }));
};

module.exports.findOne = (req, res) => {
    console.log("Is this working or not?")
    Jokes.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({ jokes: oneJoke }))
    .catch((err) => res.json({ message: "Something went wrong with find one", error: err }));
};

module.exports.createJokes = (req, res) => {
    console.log("Is this working or not?")
    Jokes.create(req.body)
    .then(newJoke => res.json({ jokes: newJoke }))
    .catch(err => res.json({ message: "Something went wrong creating a joke", error: err }));
};

module.exports.updateJokes = (req, res) => {
    console.log("Is this working or not?")
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateJokes => res.json({ jokes: updateJokes }))
    .catch(err => res.json({ message: "Something went wrong updating a joke", error: err }));
};

module.exports.deleteJokes = (req, res) => {
    console.log("Is this working or not?")
    Jokes.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong deleting a joke", error: err }));
};

module.exports.randoJoke = (req, res) => {
    console.log("Is this working or not?")
    Jokes.find()
    .then((joke) => {
        const rando = Math.floor(Math.random() * joke.length);
        res.json({ result: joke[rando] })
    })
    .catch((err) => res.json({ message: "Something went wrong grabbing a Rando joke", error: err }));
};