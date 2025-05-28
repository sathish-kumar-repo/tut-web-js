// ES6 Example
// Now let's see how the same class and inheritance can be implemented using ES6 syntax.

// Define parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  // Add method to class
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Define child class that inherits from parent class
class Student extends Person {
  constructor(name, age) {
    super(name); // Call parent constructor with this instance
    this.age = age;
  }

  // Add method to child class
  eligiblity() {
    console.log(
      this.name +
        " age is " +
        this.age +
        " " +
        (this.age >= 18 ? "Eligible" : "Not Eligable")
    );
  }
}

// Create instances of classes
let person = new Person("Joes");
let student = new Student("Joes", 35);

// Call methods on instances
person.sayHello(); // Output: Hello, my name is Joes
student.sayHello(); // Output: Hello, my name is Joes
student.eligiblity(); // Output: Joes age is 35 Eligible
