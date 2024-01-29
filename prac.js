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

// The date method

let d = Date()

console.log(d);

// set new date

d = new Date(2021, 0, 10, 30, 0);
console.log(d)

// Note: In javaScript, the date timestamp is in milliseconds not seconds


// Dealing with arrays

// One using an array literals
const num = [12, 1, 43, 1, 54, 23]

// One with an array constructor
const fruits = new Array('Apple', 'mango', 'Passion fruit');

let number = num[3];
let fruit = fruits[0];

console.log(number);
console.log(fruit);

// Object literals
const person = {
    name : 'Ochola Maxwell',
    age : 26,
    isAdmin: true
};

console.log(person.name)

let na;

na = person['name'];
let np;
np = person['isAdmin'];

console.log(na);
console.log(np)

const players = {
    'foot ball' : 'Messi',
    'basketball' : 'Lebron James'
};

console.log(players)
console.log(players['foot ball']);

// using a constructor

const player = new Object();

console.log(player);

player.id = 12;
player.name = 'Leo';

console.log(player);


// JSON 

const post = {
    id : 1,
    title : 'Post One',
    body : 'This is the body'
};

// convert to JSON string
const str = JSON.stringify(post);

console.log(str);

const obj = JSON.parse(str);

console.log(obj);

// Function declaration variant
function add(a, b) {
    return a + b
};

console.log(add(2, 3));

const adder = function (param) {
    return param * 2
};

console.log(adder(4));



