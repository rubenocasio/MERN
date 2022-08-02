const Projects = require("../models/project.model");

module.exports.findAll = (req, res) => {
    Projects.find().sort("name")
    .then(all => res.json({ authors: all }))
    .catch(err => res.json({ message: "Something went wrong with find all", error: err }));
};

module.exports.findOne = (req, res) => {
	Projects.findOne({ _id: req.params.id })
    .then((one) => res.json({ authors: one }))
    .catch((err) => res.json({ message: "Something went wrong with find one", error: err }));
};

module.exports.create = (req, res) => {
    Projects.create(req.body)
    .then(newOne => res.json({ authors: newOne }))
    .catch(err => res.json({ message: "Something went wrong creating!", error: err }));
};

module.exports.update = (req, res) => {
    Projects.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(update => res.json({ authors: update }))
    .catch(err => res.json({ message: "Something went wrong updating!", error: err }));
};

module.exports.delete = (req, res) => {
    Projects.deleteOne({ _id: req.params.id })
    .then(result => res.json({ authors: result }))
    .catch(err => res.json({ message: "Something went wrong deleting!", error: err }));
};