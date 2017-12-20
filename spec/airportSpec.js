describe("aiport", function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe("land", function(){
    it ("should land a plane", function(){
      expect(airport.land(plane)).toEqual(plane)
    });
  });

  describe("take off", function(){
    it("should instruct plane to take off", function(){
      expect(airport.takeOff(plane)).toEqual(plane)
    });
  });

});
