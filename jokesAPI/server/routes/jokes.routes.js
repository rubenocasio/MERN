const JokesController = require("../controllers/jokes.controllers");

module.exports = (app) => {
    app.get("/api/jokes/", JokesController.findAll);
    app.get("/api/jokes/:id", JokesController.findOne);
    app.put("/api/jokes/update/:id", JokesController.updateJokes);
    app.post("/api/jokes/new", JokesController.createJokes);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJokes);
};
