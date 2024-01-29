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

// template literals in javaScript
let me;
let age;

me = "Leo";
age = "23";

profile = `My name is ${me} and I am ${age} old.`;
console.log(profile);


// String Properties and Methods

const s = new String('Hello World');

x = typeof s;

// Access value by key
x = s[1];

x = s.__proto__;

console.log(x);

const myString = 'developer';

x = myString.length;

y = myString.charAt(0);
y = y.toUpperCase();
console.log(y);
// myNewString = `'${y}' + '${myString.slice(1, myString.length)}'`
myNewString = y + myString.slice(1, myString.length);
console.log(myNewString);


// The Math Object

console.log(Math);

// The for loop

let i = 0;

// for (i; i < 12; i ++) {
//     console.log(i + 1);
// }

// Another way of wring a for loop

for (let i = 0; i < 12;) {
    console.log(i + 1);
    i++;
}

// The while loop

let j;

j = 0;
while (j < 12) {
    console.log(j + 2);
    j++;
}

