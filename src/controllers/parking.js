const U = require("../utils/utilities");

/*
* The global object which holds all parking information
* */
const p = {};

/*
* Initializes the parking lot with given size
* */
const createParkingLot = function(size){
    p["slots"] = Array.apply(null,  new Array(size)).map(i => 0);
    console.log(`Created a parking lot with ${size} slots`);
};

const getAvailableSlot = (slots) => slots.indexOf(0);

/*
* Find nearest available slot and assign a car
* */
const park = function(reg, color){
    let slot =  getAvailableSlot(p.slots);
    if(slot === -1) return console.log("Sorry, parking lot is full");

    p.slots[slot] = { "regn": reg, "color": color };
};

/*
* Prints all cars in parking lot
* */
const status = function(){
    console.log(`Slot\tRegistration\tColor`);
    p.slots.forEach( (c, i) => console.log(`${i}\t${c.regn}\t${c.color}`));
};

/*
* An action handler with all allowed actions which mutate or read the parking object
* */
const actionHandler = {
    "create_parking_lot": createParkingLot,
    "park": park,
    "status": status
};

exports.issueCommand = (input) => actionHandler[U.getAction(input)](...U.getAttributes(input));
