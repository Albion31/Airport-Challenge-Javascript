describe("land", function(){
  var plane;
  var airport;
  console.log(plane)
  console.log(airport)

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it ("should land a plane", function(){
    expect(airport.land(plane)).toEqual(plane)
    console.log(airport.land(plane))
  });
});
