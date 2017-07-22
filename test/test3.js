function abc(f) {
    f();
}
;
abc(function () {
    console.log("aaa");
});
abc(function () {
    console.log("bbb");
});
