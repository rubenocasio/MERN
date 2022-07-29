const express = require("express");
// const cors = require("cors");
const app = express();

require("./config/project.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const projectRoutes = require("./routes/project.routes");
projectRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
