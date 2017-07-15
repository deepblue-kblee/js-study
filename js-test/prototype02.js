// ex01
var A = function () {
    this.x = function() {
        console.log("hello");
    };
};
A.x = function() {
    console.log("world");
};

var B = new A();
var C = new A();

A.x(); // world
B.x(); // hello
C.x(); // hello

console.log("----------------------");

// ex02
var A = function() {};
A.x = function() {
    console.log("hello");
};
A.x(); // hello

var D = new A();  // A의 prototype에는 아직 x가 없다.
// D.x();    // ERROR: TypeError: D.x is not a function

A.prototype.x = function() {
    console.log("world!!");
}

var E = new A();
var F = new A();

A.x(); // hello
D.x(); // world!!
E.x(); // world!!
F.x(); // world!!