
/*
* Gives the command name given that the input is in format
* command val1 val2
* @param {String} input
* */
exports.getAction = (input) => input.split(" ")[0];

/*
* Gives the command attributes given that the input is in format
* command val1 val2
* @param {String} input
* */
exports.getAttributes = (input) => input.split(" ").slice(1);