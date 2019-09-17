var Point = new Object();
Point.area = function() { return 0; }
Point.init = function(x,y) { this.x=x; this.y = y;}

var Circle = Object.create(Point);
Circle.area = function() {  return this.r*this.r * PI; }
Circle.init = function(x,y,r) {
  Point.init.call(this, x, y);
  this.r = r;
}

var Ellipse = Object.create(Circle);
Ellipse.init = function(x, y, r, r2) {
	Circle.init.call(this, x, y, r);
	this.r2 = r2;
};
Ellipse.area = function() {
	return 3.14 * this.r * this.r2;
};
Ellipse.toString = function() {
	return "(" + this.x + "," + this.y + ", " + this.r + " , " + this.r2 + ")";
};

var p = Object.create(Point);
p.init(1,2);
