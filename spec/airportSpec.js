describe("aiport", function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
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

    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('should confirm that the plane is no longer at the airport', function(){
      airport.land(plane)
      // spyOn(weather, "_isStormy").and.returnValue(false);
      airport.takeOff(plane)
      expect(airport.terminal).not.toContain(plane)
    });

    it('should confirm that the plane has left the terminal', function(){
      airport.land(plane);
      // spyOn(weather, "_isStormy").and.returnValue(false);
      expect(airport.takeOff(plane)).toEqual(`${plane} has left the airport.`);

    });


    });
    describe("stormy", function(){

      beforeEach(function(){
        spyOn(Math,'random').and.returnValue(1);
      });
      it('should prevent take off when weather is stormy', function(){
        airport.land(plane)

        // spyOn(Math,'random').and.returnValue(1);
        // spyOn(weather, "_isStormy").and.returnValue(true);
        expect(function(){airport.takeOff(plane);}).toThrowError("Cannot take off when stormy");
      });

  });


});
