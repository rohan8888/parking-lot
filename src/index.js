/*
* Entry point for the app.
* Checks the execution mode (CLI or file input) and delegates the commands to a common controller.
* */


const io = require("./init/execmode");
const pc = require("./controllers/parking");

io.on("line", pc.issueCommand);