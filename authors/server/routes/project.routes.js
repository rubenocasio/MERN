const projectController = require("../controllers/project.controller");

module.exports = (app) => {
    app.get("/api/authors/", projectController.findAll);
    app.get("/api/authors/:id", projectController.findOne);
    app.put("/api/authors/update/:id", projectController.update);
    app.post("/api/authors/new", projectController.create);
    app.delete("/api/authors/delete/:id", projectController.delete);
};