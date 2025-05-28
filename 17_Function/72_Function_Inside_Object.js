// Function inside Objects
//in this topic, function set as key value pair in objects

const object1 = {
  method: function () {
    console.log("Hello, I'm a method!");
  },
};

object1.method(); // prints "Hello, I'm a method!"

//Other method, not mention function keyword
const object2 = {
  method() {
    console.log("Hello, I'm a method!");
  },
};

object2.method(); // prints "Hello, I'm a method!"

// Also possible arrow function
const object = {
  method: () => {
    console.log("Hello, I'm a method!");
  },
};

object.method(); // prints "Hello, I'm a method!"

//----------------------------------------

const object3 = {
  property: "I'm a property",
  method: function () {
    console.log(this.property);
  },
};

object3.method(); // prints "I'm a property"

// Methods can also accept parameters and return values just like regular functions:
const object4 = {
  method: function (a, b) {
    return a + b;
  },
};

console.log(object4.method(1, 2)); // prints 3

// In javascript you can use class keyword to create objects with methods and properties, it follows the OOP concepts.
class Object {
  constructor() {
    this.property = "I'm a property";
  }
  method() {
    console.log("Hello, I'm a method!");
  }
}

const obj = new Object();
console.log(obj.property);
obj.method();

//----------------------------------------------------

function checkEligiblity() {
  if (this.age >= 18) {
    console.log(`${this.firstname} age is ${this.age} eligible for vote`);
  } else {
    console.log(`${this.firstname} age is ${this.age} not eligible for vote`);
  }
}

const user1 = {
  firstname: "Joes",
  age: 35,
  eligiblity: checkEligiblity,
};
user1.eligiblity();

const user2 = {
  firstname: "Sara",
  age: 12,
  eligiblity: checkEligiblity,
};
user2.eligiblity();
