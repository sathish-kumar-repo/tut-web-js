// Understanding Prototype and Prototypal Inheritance in JavaScript

let arr = ["apple", "orange"];

// console
arr.length;
arr.__proto__;
Array.prototype;

// -------------------------------

let obj = {
  name: "Joes",
  city: "salem",
  info: function () {
    return `${this.name} from ${this.city}`;
  },
};

// console
obj.toString();
Object.prototype;

// -------------------------------

function myFunction() {}

// console
myFunction.__proto__;

// -------------------------------

let obj1 = {
  name: "Joes",
  city: "salem",
  info: function () {
    return `${this.name} is from ${this.city}`;
  },
};

// 1st method but not used this method because this is not efficient, try another method
let obj2 = {
  name: "Joes",
};

// obj 1 all properties are shared in obj2
obj2.__proto__ = obj1;

/* const obj2 = Object.create(obj1);*/

obj2.name = "Raja";
// obj2.city = "Chennai";

// console
obj2.name;
obj2.city;
obj2.info();

console.log(obj2.info());

// -------------------------------

// To add method in array
Array.prototype.doubleLength = function () {
  return this.length * 2;
};

// -------------------------------

// To add method in function
Function.prototype.mybind = function () {
  console.log("This is bind function in prototype");
};

function fun() {}

// console
fun.mybind();

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }
const alice = new Person("Alice");
const bob = new Person("Bob");

alice.greet(); // logs "Hello, my name is Alice."
bob.greet(); // logs "Hello, my name is Bob."
// Define a person object with a name property

/*
arr.__proto__.__proto__                     => Object.prototype

arr.__proto__.__proto__.__proto__           => null

obj.__proto__                               => Object.prototype
obj.__proto__.__proto__                     => null

myFunction.__proto__                        => Function.prototype
myFunction.__proto__.__proto__              => Object.prototype
myFunction.__proto__.__proto__.__proto__    => null
*/
