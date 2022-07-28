const Jokes = require("../models/jokes.model");

module.exports.findAll = (req, res) => {
    Jokes.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong with find all", error: err }));
};

module.exports.findOne = (req, res) => {
	Jokes.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({ jokes: oneJoke }))
    .catch((err) => res.json({ message: "Something went wrong with find one", error: err }));
};

module.exports.createJokes = (req, res) => {
    Jokes.create(req.body)
    .then(newJoke => res.json({ jokes: newJoke }))
    .catch(err => res.json({ message: "Something went wrong creating a joke", error: err }));
};

module.exports.updateJokes = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateJokes => res.json({ jokes: updateJokes }))
    .catch(err => res.json({ message: "Something went wrong updating a joke", error: err }));
};

module.exports.deleteJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong deleting a joke", error: err }));
};