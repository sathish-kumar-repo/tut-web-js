const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }

// Another example
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log(clonedArray); // [1, 2, 3]
