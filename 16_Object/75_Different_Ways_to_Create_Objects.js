// Code 1: Object Literal Notation
const student = {
  fullName: "Ram",
  father: "Sam",
  age: 12,
  address: "cherry road",
  city: "salem",
  about: function () {
    return `${this.fullName} is from ${this.city}`;
  },
  eligibility: function () {
    return this.age >= 18;
  },
};

console.log(student);
console.log(student.about());

// -----------------------------------

// Code 2: Factory Function
function addStudent(fullName, father, age, address, city) {
  const user = {};
  user.fullName = fullName;
  user.father = father;
  user.age = age;
  user.address = address;
  user.city = city;
  user.about = function () {
    return `${this.fullName} is from ${this.city}`;
  };
  user.eligibility = function () {
    return this.age >= 18;
  };
  return user;
}
console.log(addStudent("Sam", "Raja", 25, "Gandhi Road", "Salem"));

// -----------------------------------

// same thing but using only references memory
// but this method is very useful to use because previous method ,each time call the function addStudent and to create new two function about and eligibility, so its occupy over memory usage
const studentMethod1 = {
  about: function () {
    return `${this.fullName} is from ${this.city}`;
  },
  eligibility: function () {
    return this.age >= 18;
  },
};

function addStudent2(fullName, father, age, address, city) {
  const user = {};
  user.fullName = fullName;
  user.father = father;
  user.age = age;
  user.age = age;
  user.address = address;
  user.city = city;
  user.about = studentMethod1.about;
  user.eligibility = studentMethod1.eligibility;
  return user;
}

console.log(addStudent2("Sam", "Raja", 25, "Gandhi Road", "Salem"));

// Code 3: Prototype Inheritance
const studentMethod = {
  about: function () {
    return `${this.fullName} is from ${this.city}`;
  },
  eligibility: function () {
    return this.age >= 18;
  },
};

function addStudent1(fullName, father, age, address, city) {
  const user = Object.create(studentMethod); //to give object studentMethod reference
  user.fullName = fullName;
  user.father = father;
  user.age = age;
  user.age = age;
  user.address = address;
  user.city = city;
  return user;
}

console.log(addStudent1("Sam", "Raja", 25, "Gandhi Road", "Salem"));

// -----------------------------------

// understanding 3rd type

const ob1 = {
  key1: "Value1",
  key2: "Value2",
};
const ob2 = Object.create(ob1);
// ob2.key2="New value 2";
ob2.key3 = "Value3";

// const ob2={
//     Key3:"Value3"
// };

console.log(ob1);
console.log(ob2.key2);
