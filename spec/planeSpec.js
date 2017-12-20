describe('_isFlying', function () {
  
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('should have a status flying', function(){
    expect(plane._isFlying()).toBeTruthy();
  });
});