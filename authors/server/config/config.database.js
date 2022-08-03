const mongoose = require('mongoose');

const database = "authors";
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
	.then(res => console.log(`Established a connection to the Death Star - ${database}`))
	.catch(err => console.log("Something went wrong when connecting to the Death Star", err));