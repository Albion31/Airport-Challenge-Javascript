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

    it ("should check if the plane is in the terminal", function(){
      airport.land(plane)
      expect(airport.terminal).toEqual(jasmine.arrayContaining([plane]));
    });
  });

  describe("take off", function(){
    it("should instruct plane to take off", function(){
      expect(airport.takeOff(plane)).toEqual(plane)
    });

    // it('should confirm that the plane is no longer at the airport', function(){
    //   airport.land(plane)
    //   airport.takeOff(plane)
    //   expect(airport.terminal()).not.toContain(plane)
    // });
  });


});
