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

    p.slots[slot] = {"regn": reg, "color": color, "slot": (slot+1)};
    console.log(`Allocated solt number: ${slot+1}`);
};

/*
* Print parking slot if any car present
* */
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

/*
* Set slot to empty and print*/
const leave = function (slot) {
    p.slots[slot - 1] = 0;
    console.log(`Slot number ${slot} is free`);
};

const print = (str) => {
    if(str) console.log(str)
    else console.log("Not found");
};

// Standard filter functions. Can use a common function if using a functional library.
const filterRegWithColor = (color) => print(p.slots.filter(c => c.color === color).map(c => c.regn).join(", "));
const filterSlotWithColor = (color) => print(p.slots.filter(c => c.color === color).map(c => c.slot).join(", "));
const findSlotForRegn = (regn) => print(p.slots.filter(c => c.regn === regn).map(c => c.slot).join(", "));

/*
* An action handler with all allowed actions which mutate or read the parking object
* */
const actionHandler = {
    "create_parking_lot": createParkingLot,
    "park": park,
    "status": status,
    "leave": leave,
    "registration_numbers_for_cars_with_colour": filterRegWithColor,
    "slot_numbers_for_cars_with_colour": filterSlotWithColor,
    "slot_number_for_registration_number": findSlotForRegn
};

exports.issueCommand = (input) => actionHandler[U.getAction(input)](...U.getAttributes(input));
