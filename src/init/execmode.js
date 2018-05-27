const fs = require("fs");
const readline = require("readline");

/*
* Reads the command line argument for an input file.
* If present, returns a file stream for that file else returns CLI.
* */
module.exports = readline.createInterface({ input: process.argv[2] ? fs.createReadStream(process.argv[2]) : process.stdin, output: process.stdout, terminal: false });