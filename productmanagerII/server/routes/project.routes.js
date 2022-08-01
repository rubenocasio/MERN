const projectController = require("../controllers/project.controller");

module.exports = (app) => {
    app.get("/api/products/", projectController.findAll);
    app.get("/api/products/:id", projectController.findOne);
    app.put("/api/products/update/:id", projectController.update);
    app.post("/api/products/new", projectController.create);
    app.delete("/api/products/delete/:id", projectController.delete);
};