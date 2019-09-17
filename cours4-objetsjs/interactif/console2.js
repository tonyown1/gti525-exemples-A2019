
var PI = 3.14;

function Point(x,y) {
  this.x = x;
  this.y = y;
  //this.area = function() { return 0; }
}

function Circle(x,y,r) {
  Point.call(this, x, y);
  this.r = r;
}

Circle.prototype = new Point();
Circle.prototype.constructor = Circle;
// var c = new Circle();
// c
// c.__proto__ OU Object.getPrototypeOf(c)
// c.__proto__.__proto__


function Ellipse(x,y,r,r2) {
  Circle.call(this, x,y,r);
  this.r2 = r2;
}

Ellipse.prototype = new Circle();
Ellipse.prototype.constructor = Ellipse;


Point.prototype["area"] = function() {
  return 0;
}


Circle.prototype.area = function() {
  return this.r*this.r * PI;
}


Ellipse.prototype.area = function() {
  return this.r * this.r2 * PI;
}

var c = new Circle(1,2,3);
console.log( c.area() );

// est-ce area dans "c"
// si non, est-ce que area dans c.__proto__
// si non, est-ce que area dans c.__proto__.__proto__

28.26 debugger eval code:46:9
undefined
c;
{…}
​
r: 3
​
x: 1
​
y: 2
​
<prototype>: Object { x: undefined, y: undefined, constructor: Circle(), … }

c.__proto__
Object { x: undefined, y: undefined, constructor: Circle(), area: area() }

delete Circle.prototype.area
true
c.__proto__
Object { x: undefined, y: undefined, constructor: Circle() }

c.area();
0
c.__proto__.__proto__
Object { area: area(), … }

c.__proto__.__proto__.__proto__
{…}
​
__defineGetter__: function __defineGetter__()
​
__defineSetter__: function __defineSetter__()
​
__lookupGetter__: function __lookupGetter__()
​
__lookupSetter__: function __lookupSetter__()
​
__proto__:
​
constructor: function Object()
​
hasOwnProperty: function hasOwnProperty()
​
isPrototypeOf: function isPrototypeOf()
​
propertyIsEnumerable: function propertyIsEnumerable()
​
toLocaleString: function toLocaleString()
​
toSource: function toSource()
​
toString: function toString()
​
valueOf: function valueOf()
​
<get __proto__()>: function __proto__()
​
<set __proto__()>: function __proto__()

c.toString();
"[object Object]"
Point.prototype.toString = function() {return "X="+this.x + " | Y=" + this.y;}
function toString()

c.toString();
"X=1 | Y=2"
Ellipse.prototype.hello = function() {return "World";}
function hello()

var e = new Ellipse(1,2,3,4);
undefined
e.hello();
"World"
c.hello();
TypeError: c.hello is not a function
debugger eval code:1:3
var Person = new Object();
undefined
Person.name = "Julien";
"Julien"
person.lastName = "Gascon";
ReferenceError: person is not defined
debugger eval code:1:1
Person.lastName = "Gascon";
"Gascon"
Person;
Object { name: "Julien", lastName: "Gascon" }

var employee = Object.create(Person);
undefined
employee.name;
"Julien"
employee;
{}
​
<prototype>: {…}
​​
lastName: "Gascon"
​​
name: "Julien"
​​
<prototype>: Object { … }

var Cercle2 = Object.create(Point.prototype);
undefined
Cercle2;
Object {  }

Cercle2.__proto__
Object { area: area(), toString: toString(), … }

Cercle2.area();
0
var Person2 = Object.create();
TypeError: Object.create requires at least 1 argument, but only 0 were passed
debugger eval code:1:22
var Person2 = Object.create(null);
undefined
Person2.init = function(firstName, lastName) { this.firstName = firstName; this.lastName = lastName;}
function init()

Person2.init("Bob", "King");
undefined
Person2;
Object { init: init(), firstName: "Bob", lastName: "King" }

Point;
function Point()

Point.new = function(x,y) {

    //1- créer objet avec proto
    var p = Object.create(Point.prototype);

    //2- appeler le constructeur
    Point.apply(p, [x,y]);

    //3- retourner
    return p;
}
function new()

var pp = Point.new(1,2);
undefined
pp;
Object { x: 1, y: 2 }

pp.area();
0
Point.new = function() {

    //1- créer objet avec proto
    var p = Object.create(Point.prototype);

    //2- appeler le constructeur
    Point.apply(p, arguments);

    //3- retourner
    return p;
}
function new()

var pp = Point.new(1,2);
undefined
pp;
Object { x: 1, y: 2 }

Point.new = function() {

    //1- créer objet avec proto
    var p = Object.create(this.prototype);

    //2- appeler le constructeur
    this.apply(p, arguments);

    //3- retourner
    return p;
}
function new()

var pp = Point.new(1,2);
undefined
pp;
{…}
​
x: 1
​
y: 2
​
<prototype>: Object { area: area(), toString: toString(), … }

pp.area();
0
Cercle.new = Point.new;
ReferenceError: Cercle is not defined
debugger eval code:1:1
Circle.new = Point.new;
function new()

var c = Circle.new(1,2,3);
undefined
c;
Object { x: 1, y: 2, r: 3 }

Point.new == Circle.new
true

​
