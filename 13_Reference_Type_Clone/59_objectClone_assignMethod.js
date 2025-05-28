const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Object interface
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }

obj3 = Object.assign({ y: 1, z: 2 }, obj1, obj2);
console.log(obj3);
