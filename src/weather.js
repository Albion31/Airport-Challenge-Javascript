function Weather(){
};

  Weather.prototype._isStormy = function(){
    return Math.random() > 0.5
  };
