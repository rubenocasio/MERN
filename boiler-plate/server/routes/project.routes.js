const projectController = require("../controllers/project.controller");

module.exports = (app) => {
    app.get("/api/project/", projectController.findAll);
    app.get("/api/project/:id", projectController.findOne);
    app.put("/api/project/update/:id", projectController.update);
    app.post("/api/project/new", projectController.create);
    app.delete("/api/project/delete/:id", projectController.delete);
};