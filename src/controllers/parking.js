const U = require("../utils/utilities");

/*
* The global object which holds all parking information
* */
const p = {};

/*
* Initializes the parking lot with given size
* */
const createParkingLot = function(size){
    p["slots"] = new Array(size);
    console.log(`Created a parking lot with ${size} slots`);
};

/*
* An action handler with all allowed actions which mutate or read the parking object
* */
const actionHandler = {
    "create_parking_lot": createParkingLot
};

exports.issueCommand = (input) => actionHandler[U.getAction(input)](...U.getAttributes(input));
