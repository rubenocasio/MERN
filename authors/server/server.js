const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

require("./config/mongoose.config.js");

app.use(express.json(), express.urlencoded({ extended: true }));

const projectRoutes = require("./routes/project.routes");
projectRoutes(app);

app.listen(8000, () => console.log(`Death Star tractor beam connected on port ${port}`));
