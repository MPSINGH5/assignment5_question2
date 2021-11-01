var y = 20;

function bar() {
    var y = 200;

    function baz() {  
        console.log(y);
    }

    baz();
}

bar();

function say(message) {
    if(!message) {
        let greeting = 'Hello'; // block scope
        console.log(greeting);
    }
    console.log(greeting); // ReferenceError
}

say();

function getCounter() {
    'use strict'
    counter = 10;
    return counter;
}
console.log(getCounter());
