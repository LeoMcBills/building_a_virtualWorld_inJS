// this is a practice javascript file

// function declarations

function add(a, b) {
    return a + b;
}

console.log(add(1, 2))

function subtract(a, b) {
    return a - b;
}

let value;
value = subtract(6, 2);
console.log("The value of the subtraction of the numbers input is: " + value);

console.log(value, typeof value);

// NaN is a number type and it means not a number.

function use() {
    console.log("This is how to successfully use the ES6 javaScript code snippets for effective code completion");
}

use();

// there's an element of type coercion for example the following

let val;

val = 2 + "2";
console.log(val);