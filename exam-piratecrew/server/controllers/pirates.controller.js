const Pirates = require("../models/pirate.model");

module.exports = {
    index:(req,res) => {
        Pirates.find({}).sort("name").exec()
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Pirates.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    show:(req,res) => {
        Pirates.findOne({_id:req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Pirates.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators: true})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Pirates.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
}