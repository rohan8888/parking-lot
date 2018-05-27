const U = require("../../src/utils/utilities");
const expect = require("chai").expect;

describe("Command parsing test", function(){
   it("should return action", function(done){
      let ac = U.getAction("park ABC white");
      expect(ac).to.be.equal("park");
      done();
   });

   it("should return all parameters after action", function(done){
      let parameters = U.getAttributes("park ABC white");
      expect(parameters.length).to.be.equal(2);

      parameters = U.getAttributes("status");
      expect(parameters.length).to.be.equal(0);

      done();
   });
});

