function foo(x) {
    this.x = x;
    console.log("IN foo(): " + x);
};

var a = new foo('hello'); 
console.log(a.x);

foo.prototype.y = "bbb"; // OK!!
console.log(a.y); // bbb

a.y = "111"; // set a.y
console.log(a.y); // 111

var b = new foo("world");
console.log(b.y); // bbb -> from foo.prototype.y

a.prototype.z = "ccc"; // ERROR!! --> prototype은 원형 foo에서만 사용 가능.
