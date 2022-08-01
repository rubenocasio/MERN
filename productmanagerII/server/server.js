const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("./config/project.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const projectRoutes = require("./routes/project.routes");
projectRoutes(app);

app.listen(8000, () => console.log("Death Star tractor beam connected on port 8000"));
