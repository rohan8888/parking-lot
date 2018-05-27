const P = require("../../../src/controllers/parking");
const expect = require("chai").expect;

describe("Parking action validations", function () {
    it("should create an array of 0s of given size", function (done) {
        let size = 6;
        P.issueCommand(`create_parking_lot ${size}`);
        expect(P.PLObj.slots.length).to.be.equal(6);
        expect(P.PLObj.slots.filter(e => e === 0).length).to.be.equal(6);
        done();
    });

    it("should always return first 0 (empty) slot", function (done) {
        let slots = [{}, {}, 0, {}, 0];
        let s = P.getAvailableSlot(slots);

        expect(s).to.be.equal(2);
        done();
    });

    it("should return expected results", function (done) {
        let slots = [{regn: "abc", color: "white", "slot": 1}, 0, 0, {regn: "def", color: "white", "slot": 4}, {regn: "ghi", color: "black", "slot": 5}];
        P.PLObj["slots"] = slots;

        let out = P.filterRegWithColor("white");
        expect(out).to.be.equal("abc, def");

        out = P.filterRegWithColor("blue");
        expect(out).to.be.equal("Not found");

        out = P.filterSlotWithColor("black");
        expect(out).to.be.equal("5");

        out = P.filterSlotWithColor("blue");
        expect(out).to.be.equal("Not found");

        out = P.findSlotForRegn("def");
        expect(out).to.be.equal("4");

        done();
    })

});