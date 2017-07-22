var a = 1;

function aaa() {
    var b = 2;
    let c = 3;
    x = 10;

    function bbb() {
        var d = 4;
        let e = 5;
        console.log("b=" + b); // can access!
        console.log("c=" + c); // can access!
        console.log("x=" + x); // can access!
    };

    bbb();

    // console.log("d=" + d); // cannot access!
    // console.log("e=" + e); // cannot access!
    console.log("x=" + x); // can access! = same with "var x = 10;"
}

console.log("a=" + a);
// console.log("b=" + b); // cannot access!
// console.log("c=" + c); // cannot access!
// console.log("x=" + x); // cannot access!

aaa();