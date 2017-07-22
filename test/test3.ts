function abc(f) {
    f();
};

abc(function() {
        console.log("aaa");
    });

abc(() => {
        console.log("bbb");
    });
