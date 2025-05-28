// Data Types in JavaScript
/*
JS Dynamic Programming
 
Primitive

String
Number   eg:  1.25,25
Boolean  eg:  True,False
Null
Undefinded 
Symbols  E6
 

Reference

Array
Object Literals
Date
*/

// Primitive

var a = 25.5;
console.log(typeof a);

var fname = "Sathish Kumar";
console.log(typeof fname);

var isMarried = true;
console.log(typeof isMarried);

var phone = null; // it show output is object
console.log(typeof phone);

let b;
console.log(typeof b); // undefined type

//ES6 2015
//  this is unique value that is identity
const s1 = Symbol(); //dlkfngsgs6565df6
console.log(s1);

const s2 = Symbol(); //fdfgdfg4345345
console.log(s2);

console.log(s1 == s2); // False
console.log(typeof s1);

//  Refernces type
var courses = ["C", "C++", "Java"]; // object type
console.log(typeof courses);

var student = {
  name: "Joes",
  age: 22,
};
console.log(typeof student);

var d = new Date();
console.log(d);
console.log(typeof d);
