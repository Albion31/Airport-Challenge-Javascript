describe ("weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it("should return true when weather is stormy", function(){
    spyOn(weather, "_isStormy").and.returnValue(true);
    expect(weather._isStormy()).toBeTruthy();
  });
});
