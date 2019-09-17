var Point = function (x, y) {
    this.x = x;
    this.y = y;
};

var addAll = function( ) {
    var p = new Point(0,0);
    for (var i=0; i<arguments.length; i++) {
        var  point = arguments[i];
        if ( p.x==undefined || p.y==undefined )
            throw { name: TypeError,
                message: "Object " + point + " is not of type Point",
                somme: point;
        };
        p.x = p.x + point.x;
        p.y = p.y + point.y;
    }
    return p;
}

var p1 = new Point(1,2);
var p2 = new Point(3,4);

try {
    addAll(p1, p2, "hello");
}
catch (e) {
        console.log(e.somme);
}

SyntaxError: missing } after property list debugger eval code:13:16note: { opened at line 11, column 9debugger eval code:11:9
var Point = function (x, y) {
    this.x = x;
    this.y = y;
};

var addAll = function( ) {
    var p = new Point(0,0);
    for (var i=0; i<arguments.length; i++) {
        var  point = arguments[i];
        if ( p.x==undefined || p.y==undefined )
            throw { name: TypeError,
                message: "Object " + point + " is not of type Point",
                somme: point
        };
        p.x = p.x + point.x;
        p.y = p.y + point.y;
    }
    return p;
}

var p1 = new Point(1,2);
var p2 = new Point(3,4);

try {
    addAll(p1, p2, "hello");
}
catch (e) {
        console.log(e.somme);
}

{…}
​
x: NaN
​
y: NaN
​
<prototype>: Object { … }

var Point = function (x, y) {
    this.x = x;
    this.y = y;
};

var addAll = function( ) {
    var p = new Point(0,0);
    for (var i=0; i<arguments.length; i++) {
        var  point = arguments[i];
        if ( point.x==undefined || point.y==undefined )
            throw { name: TypeError,
                message: "Object " + point + " is not of type Point",
                somme: p
        };
        p.x = p.x + point.x;
        p.y = p.y + point.y;
    }
    return p;
}

var p1 = new Point(1,2);
var p2 = new Point(3,4);

try {
    addAll(p1, p2, "hello");
}
catch (e) {
        console.log(e.somme);
}

Object { x: 4, y: 6 }
debugger eval code:28:11
undefined
