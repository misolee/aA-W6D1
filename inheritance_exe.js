Function.prototype.inherits1 = function(ParentClass){
  function Surrogate() {}
  Surrogate.prototype = ParentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function(ParentClass){
  this.prototype = Object.create(ParentClass.prototype);
  this.prototype.constructor = this;
};




function MovingObject () {}



function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}