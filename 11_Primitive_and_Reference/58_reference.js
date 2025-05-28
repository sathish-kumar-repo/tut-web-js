let people = { name: "Sathish Kumar", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
let today = new Date(); // Object

// Primitive and Refernce datatype

// Objects
let user = { name: "Sathish Kumar", age: 30 }; // Object
let user2 = user;
console.log("User 1 :", user);
console.log("User 2 :", user2);
user.age = 25;
console.log("User 1 :", user);
console.log("User 2 :", user2);

// Array
let arr1 = [10, 20, 30];
let arr2 = arr1;
console.log("Array 1 :", arr1);
console.log("Array 2 :", arr2);
arr1.push(40);
console.log("After Pushing element to arr1 : ");
console.log("Array 1 :", arr1);
console.log("Array 2 :", arr2);
