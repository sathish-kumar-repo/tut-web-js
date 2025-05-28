// Using Maps in JavaScript: Common Mistakes and Best Practices

// Mistake 1: Using the wrong syntax to set values
// One common mistake is to use the wrong syntax to set values in a Map. This can happen when developers try to set values using the same syntax as they would use for an object. For example:

const wrongMap = new Map();
wrongMap["key1"] = "Data1";
wrongMap["key2"] = "Data2";
console.log(wrongMap.has("key1")); // false

// This is incorrect because Maps are not meant to be accessed like objects. Instead, you should use the set() method to add key-value pairs to a Map:
const correctMap = new Map();
correctMap.set("key1", "Data1");
correctMap.set("key2", "Data2");

// ---------------------

// Mistake 2: Not using the has() method to check if a key exists
// Another mistake that developers make is to assume that a key exists in a Map without checking for it first. This can result in errors or unexpected behavior. To avoid this, you should always use the has() method to check if a key exists before trying to access its value:

const myMap1 = new Map();
myMap1.set("key1", "value1");

if (myMap1.has("key1")) {
  console.log(myMap1.get("key1"));
}

// --------------------

// Mistake 3: Treating keys as strings when they are not
// Maps can use any type of value as a key, not just strings. However, if you try to use a non-string value as a key, it will be converted to a string. This can lead to unexpected results if you are not aware of it. To avoid this, you should always use the same type of value for a key that you intend to use when you retrieve it later:

const myMap2 = new Map();
const objKey = {};
const arrKey = [];

myMap2.set(objKey, "value1");
myMap2.set(arrKey, "value2");

console.log(myMap2.get(objKey)); // "value1"
console.log(myMap2.get({})); // undefined
console.log(myMap2.get(arrKey)); // "value2"
console.log(myMap2.get([])); // undefined
