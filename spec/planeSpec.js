describe('_isFlying', function () {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('should have a status flying when flying', function(){
    expect(plane.status()).toBeTruthy();
  });

  it('should have a status of not flying when landed', function(){
    airport.land(plane)
    expect(plane.status()).toBeFalsy();
  });
});
