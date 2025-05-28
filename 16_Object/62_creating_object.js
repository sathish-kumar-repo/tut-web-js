// 1.Using Objects literal
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

// 2.Using the Object constructor
const person1 = new Object(); // object is a class
person1.name = "John";
person1.age = 30;
person1.job = "Developer";
console.log(person);

// 3.Using the Object.create() method:

const personProto = {
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person2 = Object.create(personProto);
person2.name = "John";
person2.age = 30;
person2.job = "Developer";
console.log(person2);
person2.sayHello();

// 4.Using Class
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person4 = new Person("Tiya", 30, "Developer");
console.log(person4);
