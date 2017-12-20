function Airport(){
  this.terminal = []
  this.weather = new Weather()
};

Airport.prototype.land = function(plane){
  this.terminal.push(plane)
  plane.isNotFlying()
  return plane
};

Airport.prototype.takeOff = function(plane){
  // console.log("weather")
  console.log(this.weather._isStormy())
  if(this.weather._isStormy()) {
    throw new Error("Cannot take off when stormy")
  }
  this.terminal.pop(plane)
  return `${plane} has left the airport.`
};
