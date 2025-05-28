// The syntax for defining a getter or a setter is as follows:

const obj = {
  get propertyName() {
    // code to get the property value
  },
  set propertyName(value) {
    // code to set the property value
  },
};

// Example 1: Getters and Setters with Object Literals
const person = {
  firstName: "Tutor",
  lastName: "Joes",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName); // output: "Tutor Joes"
person.fullName = "Sam Sundar";
console.log(person.firstName); // output: "Sam"
console.log(person.lastName); // output: "Sundar"
console.log(person.fullName); // output: "Sam Sundar"

// Same example as class

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const p1 = new Person("Sathish", "Kumar");
console.log(p1);
console.log(p1.fullName);
p1.fullName = "Raj Kumar";

console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.fullName);

// In this example, we use a class definition to define a Circle class that has a radius property and two getters (diameter and area) and one setter (diameter).
/*
 1 create a class called circle
 2 radius values a constructor
 3 getter and setter function called diameter 
 4 getter area()
 */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // output: 5
console.log(myCircle.diameter); // output: 10
console.log(myCircle.area); // output: 78.53981633974483

myCircle.diameter = 12;
console.log(myCircle.radius); // output: 6
console.log(myCircle.diameter); // output: 12
console.log(myCircle.area); // output: 113.09733552923254
