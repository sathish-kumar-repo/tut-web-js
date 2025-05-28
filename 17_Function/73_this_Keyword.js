// print current window object
console.log(this);

// -------------------------------------

var age = 25;

function info() {
  console.log(age);
  console.log(this.age); // because it denotes window object
  console.log(this);
}

info(); // this function calling internally in JS is window.info()

// It is clear that variable or function declare in global scope, athu kandipa window object kulla tha irrukum

// -------------------------------------

// now this function declared inside other object
const user = {
  age: 45, //to print age
  func: info, // to print current user object details
};

user.func();

// in nested function
const user1 = {
  age: 45,
  func: info,
  nested: {
    age: 15,
    func: info,
  },
};

user1.nested.func(); // to print age is 15 and current scope object

const student = {
  age: 25,
  func1: function () {
    console.log("Fun 1", this.age);
    console.log("Fun 1", this);
    function func2() {
      console.log("Fun 2", this.age);
      console.log("Fun 2", this);
    }
    func2(); //refer window object becuase it call in free from object.
  },
};

student.func1(); // refer student object

// -------------------------------------

// In case suppose arrow function is totally different
const student1 = {
  age: 25,
  func1: function () {
    console.log("Fun 1", this.age);
    console.log("Fun 1", this);
    function func2() {
      console.log("Fun 2", this.age);
      console.log("Fun 2", this);
    }
    func2(); //refer window object

    const func3 = () => {
      console.log("Fun 3", this.age);
      console.log("Fun 3", this);
    };
    func3(); //refer current object because arrow function is totaly different and it special and intha function enga declare panromo athoda scope tha edukum
  },
};
student1.func1();
