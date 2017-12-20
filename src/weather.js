function Weather(){
};

  Weather.prototype._isStormy = function(){
    return Math.floor(Math.random() * 5) === 1 ? true : false
  };
