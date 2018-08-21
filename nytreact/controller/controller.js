const Article = require("../models/Article.js");

module.exports = {
    find: function(req, res) {
        console.log("Loading Articles")
        Article.find().then(function(doc) {
            res.json(doc);
        }).catch(function(err){
            res.json(err);
        });
    },
    insert: function(req, res) {
        console.log("Creating Article");
        Article.create().then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        })
    },
    delete: function(req, res) {
        console.log("Deleting Article")
        Article.remove({
            _id: req.params.id
        }).then(function(doc){
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    }
};