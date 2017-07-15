var A = function () {
    this.x = function() {
        console.log("hello");
    };
};

// ERROR: A는 object이므로 다음과 같이 할 수 없다!!
// A.prototype.x = function() {
//     console.log("world");
// };

var B = new A();
var C = new A();

console.log(A.x); // undefined  --> A는 object이며, prototype property에 x가 없다.
console.log(B.x); // [Function]
// A.x(); // ERROR: A.x()를 호출할 수 없다.
B.x(); // hello
C.x(); // hello