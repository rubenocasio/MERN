const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productsdbII", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the Death Star"))
	.catch(err => console.log("Something went wrong when connecting to the Death Star", err));