function Plane(){
  this.status = true
};

Plane.prototype.isFlying = function(){
  this.status = true;
};

Plane.prototype.isNotFlying = function(){
  this.status = false
};

Plane.prototype.status = function(){
  return this.status
};
