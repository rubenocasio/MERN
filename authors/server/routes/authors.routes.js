const AuthorsController = require('../controllers/authors.controllers');

module.exports = (app) => {
    app.get("/api/authors", AuthorsController.index);
    app.post("/api/create/author", AuthorsController.create);
    app.get("/api/author/:id", AuthorsController.show);
    app.put("/api/update/author/:id", AuthorsController.update);
    app.delete("/api/destroy/author/:id", AuthorsController.destroy);
}