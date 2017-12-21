describe("aiport", function () {
  var plane;
  var airport;
  var weather;

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
  });

  describe("land", function () {

    beforeEach(function () {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it("should land a plane", function () {
      expect(airport.land(plane)).toEqual(plane)
    });

    it("should check if the plane is in the terminal", function () {
      airport.land(plane)
      expect(airport.terminal).toEqual(jasmine.arrayContaining([plane]));
    });
  });

  describe("take off", function () {

    beforeEach(function () {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('should confirm that the plane is no longer at the airport', function () {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.terminal).not.toContain(plane)
    });

    it('should confirm that the plane has left the terminal', function () {
      airport.land(plane);
      // spyOn(weather, "_isStormy").and.returnValue(false);
      expect(airport.takeOff(plane)).toEqual(`${plane} has left the airport.`);

    });


  });


  describe("when stormy", function () {

    beforeEach(function () {
      spyOn(Math, 'random').and.returnValue(1);
    });

    it('should prevent take off when weather is stormy', function () {
      expect(function () { airport.takeOff(plane); }).toThrowError("Cannot take off when stormy");
    });

    it('should prevent landing when weather is stormy', function(){
      expect(function() { airport.land(plane); }).toThrowError("Cannot land when weather is stormy") 
    });

  });

  describe("terminal is full", function(){

    it("should prevent planes from landing when terminal is full", function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.capacity = 0
      expect(function() { airport.land(plane); }).toThrowError("Airport is full")
    });
  });

  describe("edge case", function(){
    it("should raise error when calling land on landed plane", function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane)
      expect(function(){ airport.land(plane); }).toThrowError("Plane has already landed")
    });

    it("should raise error when calling take off on flying plane", function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane)
      airport.takeOff(plane)
      expect(function(){ airport.takeOff(plane); }).toThrowError("Plane is already flying")
    });

  });

});
