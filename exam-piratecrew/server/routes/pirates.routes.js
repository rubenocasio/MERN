const PiratesController = require('../controllers/pirates.controller');

module.exports = (app) => {
    app.get("/api/pirates", PiratesController.index);
    app.post("/api/create/pirates", PiratesController.create);
    app.get("/api/pirates/:id", PiratesController.show);
    app.put("/api/update/pirates/:id", PiratesController.update);
    app.delete("/api/destroy/pirates/:id", PiratesController.destroy);
}