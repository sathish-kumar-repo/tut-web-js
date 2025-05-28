// Static methods and properties are defined using the static keyword before the method or property name. This tells JavaScript that the method or property should be associated with the class itself, rather than with instances of the class.
// static is class level

class MyClass {
  static myStaticProperty = "Hello from a static property!";
  static myStaticMethod() {
    console.log("Hello from a static method!"); //static method
  }
}

MyClass.myStaticMethod(); // Output: Hello from a static method!
console.log(MyClass.myStaticProperty); // Output: Hello from a static property!

// Example 1: Utility Class

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log(MathUtils.add(2, 3)); // Output: 5
console.log(MathUtils.multiply(4, 5)); // Output: 20

// Example 2: Singleton Pattern

// suppose you create one class , antha class la oru object tha create aaganum, antha object instances sa regular ra use panikita irukanum

class Database {
  static instance = null;

  static getInstance() {
    if (!Database.instance) {
      // if object instance is not  create
      Database.instance = new Database(); // intha database oda object references set aagidum
    }
    return Database.instance;
  }

  query(sql) {
    // code to execute SQL query
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // Output: true
// In this example, the Database class has a static property called instance that is set to null by default. The getInstance() method checks if the instance property has been set and creates a new instance of the Database class if it hasn't. Once an instance has been created, the getInstance() method returns it. By doing this, we can ensure that only one instance of the Database class is created, even if we call getInstance() multiple times.

// Example 3: Constants

class Colors {
  static RED = "#ff0000";
  static GREEN = "#00ff00";
  static BLUE = "#0000ff";
}

console.log(Colors.RED); // Output: #ff0000
console.log(Colors.GREEN); // Output: #00ff00
