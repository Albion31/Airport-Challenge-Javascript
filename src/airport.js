function Airport(){
};

Airport.prototype.land = function(plane){
  plane._isNotFlying()
  return plane
};

Airport.prototype.takeOff = function(plane){
  return plane
};
