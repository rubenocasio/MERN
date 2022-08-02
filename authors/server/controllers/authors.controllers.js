const Authors = require("../models/authors.models");

module.exports = {
    index:(req,res) => {
        Authors.find().sort("author")
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Authors.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    show:(req,res) => {
        Authors.findOne({_id:req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Authors.findOneAndUpdate({_id:req.params.id},req.body,{new:true, useFindAndModify:false})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        console.log(req)
        Authors.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
}