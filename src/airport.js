function Airport(){
  this.terminal = []
  this.weather = new Weather()
  this.capacity = 3
};

Airport.prototype.land = function(plane){
  if(this.weather._isStormy()) {
    throw new Error("Cannot land when weather is stormy")
  } else if (this.terminal.length >= this.capacity) {
    throw new Error("Airport is full")
  }
  this.terminal.push(plane)
  plane.isNotFlying()
  return plane
};

Airport.prototype.takeOff = function(plane){
  if(this.weather._isStormy()) {
    throw new Error("Cannot take off when stormy")
  }
  this.terminal.pop(plane)
  return `${plane} has left the airport.`
};
