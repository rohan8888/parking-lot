const U = require("../utils/utilities");

/*
* The global object which holds all parking information
* */
const p = {};

/*
* Initializes the parking lot with given size
* */
const createParkingLot = function (size) {
    size = parseInt(size);
    p["slots"] = Array.apply(null, new Array(size)).map(i => 0);
    console.log(`Created a parking lot with ${size} slots`);
};

const getAvailableSlot = (slots) => slots.indexOf(0);

/*
* Find nearest available slot and assign a car
* */
const park = function (reg, color) {
    let slot = getAvailableSlot(p.slots);
    if (slot === -1) return console.log("Sorry, parking lot is full");

    p.slots[slot] = {"regn": reg, "color": color};
    console.log(`Allocated solt number: ${slot+1}`);
};

const printCar = function(c, i){
    if(c !== 0){
        console.log(`${i+1}\t${c.regn}\t${c.color}`)
    }
};

/*
* Prints all cars in parking lot
* */
const status = function () {
    console.log(`Slot\tRegistration\tColor`);
    p.slots.forEach(printCar);
};

const leave = function (slot) {
    p.slots[slot - 1] = 0;
    console.log(`Slot number ${slot} is free`);
};

/*
* An action handler with all allowed actions which mutate or read the parking object
* */
const actionHandler = {
    "create_parking_lot": createParkingLot,
    "park": park,
    "status": status,
    "leave": leave
};

exports.issueCommand = (input) => actionHandler[U.getAction(input)](...U.getAttributes(input));
