
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




/*
Écrivez une fonction qui itère sur les propriétés
d'un objet donné, et qui identifie les propriétés
qui ont été héritées de la chaîne prototypale ET
surchargées avec une valeur différente dans l'objet lui-même.
• Ne considérez pas les fonctions.
*/

function iterateOverProperties(o) {

  for (var p in o) {

    var prop = o[p];
    if (typeof(prop) == "function")
      continue;

    // Est-ce que p provient de la chaîne de prototypes
    // et que p est aussi redéfinie dans o
    if ( p in o.__proto__ && o.hasOwnProperty(p) ) {
      console.log("p: " + p + " | o[p]:" + prop);
    }
  }

}

28.26 debugger eval code:46:9
undefined
iterateOverProperties(c);
p: x | o[p]:1 debugger eval code:74:15
p: y | o[p]:2 debugger eval code:74:15
undefined
"x" in c;
true
"x" in c.__proto__;
true
c.__proto__;
Object { x: undefined, y: undefined, constructor: Circle(), area: area() }

c.a = "1";
"1"
iterateOverProperties(c);
p: x | o[p]:1 debugger eval code:74:15
p: y | o[p]:2 debugger eval code:74:15
undefined
Cercle.prototype.a = "2";
ReferenceError: Cercle is not defined
debugger eval code:1:1
Circle.prototype.a = "2";
"2"
iterateOverProperties(c);
p: x | o[p]:1 debugger eval code:74:15
p: y | o[p]:2 debugger eval code:74:15
p: a | o[p]:1 debugger eval code:74:15
undefined
c.toString = function() {return "abc";}
function toString()

iterateOverProperties(c);
p: x | o[p]:1 debugger eval code:74:15
p: y | o[p]:2 debugger eval code:74:15
p: a | o[p]:1 debugger eval code:74:15
undefined
"toString" in c.__proto__
true

​
