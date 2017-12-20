function Plane(){
  this._status = true
};

Plane.prototype._isFlying = function(){
  this._status = true;
};

Plane.prototype._isNotFlying = function(){
  this._status = false
};

Plane.prototype.status = function(){
  return this._status
};
