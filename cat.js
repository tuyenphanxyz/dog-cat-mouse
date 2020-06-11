function cat(argument) {

	this.stomach =[];
}

Cat.prototype.die = function() {
this.dead = true;
};

module.exports = Cat;

var Dog = cat;