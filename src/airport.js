function Airport(){
  this.terminal = []
};

Airport.prototype.land = function(plane){
  this.terminal.push(plane)
  plane.isNotFlying()
  return plane
};

Airport.prototype.takeOff = function(plane){
  return plane
};
