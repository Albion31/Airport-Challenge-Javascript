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
  } else if (plane.status === false) {
    throw new Error("Plane has already landed")
  }
  
  this.terminal.push(plane)
  plane.isNotFlying()
  return plane
};

Airport.prototype.takeOff = function(plane){
  if(this.weather._isStormy()) {
    throw new Error("Cannot take off when stormy")
  } else if (plane.status === true) {
    throw new Error("Plane is already flying")
  }
  this.terminal.pop(plane)
  plane.isFlying()
  return `${plane} has left the airport.`
};
