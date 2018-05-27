const P = require("../../../src/controllers/parking");
const expect = require("chai").expect;

describe("Parking action validations", function(){
    it("should create an array of 0s of given size", function(done){
        let size = 6;
        P.issueCommand(`create_parking_lot ${size}`);
        expect(P.PLObj.slots.length).to.be.equal(6);
        expect(P.PLObj.slots.filter(e => e === 0).length).to.be.equal(6);
        done();
    });
});