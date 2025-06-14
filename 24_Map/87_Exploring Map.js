// Map Object in JS

// Creating a Map Object:
const userMap = new Map();

// Adding Elements to a Map:
// To add a new key-value pair to the Map, we use the set() method. The following code adds four key-value pairs to the userMap:
userMap.set("name", "Joes");
userMap.set("age", 30);
userMap.set("city", "Salem");
userMap.set("contact", "9043017689");

// Printing a Map Object:
// To print a Map object, we can simply log it to the console. The following code logs the userMap to the console:
console.log(userMap);

// Updating the Value of a Map:
// To update the value of an existing key in the Map, we can simply use the set() method again with the same key. The following code updates the age of the user in the userMap:
userMap.set("age", 31);
console.log(userMap);

// Map Size:
// To get the size of a Map object, we can use the size property. The following code logs the size of the userMap:
console.log("Map Size: ", userMap.size);

// Deleting a Key-Value Pair from a Map:
// To remove a key-value pair from the Map, we can use the delete() method. The following code removes the city from the userMap:
console.log("Before Delete :", userMap);
userMap.delete("city");
console.log("After Delete :", userMap);

// Retrieving a Value from a Map:
// To retrieve the value of a key from the Map, we can use the get() method. The following code retrieves the value of the name key from the userMap:
console.log(userMap.get("name"));

// Checking if a Key Exists in a Map:
// To check if a key exists in the Map, we can use the has() method. The following code checks if the name and city keys exist in the userMap:
console.log(userMap.has("name"));
console.log(userMap.has("city"));

// Iterating a Map with for...of:
// We can iterate over the keys and values of a Map using a for...of loop with destructuring. The following code logs each key-value pair of the userMap to the console:
for (const [key, value] of userMap) {
  console.log(`${key} = ${value}`);
}

// Retrieving Keys from a Map:
// We can retrieve all the keys of a Map using the keys() method. The following code logs each key of the userMap to the console:
for (const key of userMap.keys()) {
  console.log(key);
}

// Retrieving Values from a Map:
// We can retrieve all the values of a Map using thevalues() method. The following code logs each value of the userMap to the console:
for (const value of userMap.values()) {
  console.log(value);
}

// Retrieving Entries from a Map:
// We can retrieve all the entries of a Map using theentries() method. The following code logs each entry of the userMap to the console:
for (const [key, value] of userMap.entries()) {
  console.log(`${key}  = ${value}`);
}

// Retrieving Key-value from a Map using forEach():
// We can retrieve all the key-value of a Map using the forEach() method. The following code logs each key-value of the userMap to the console:
userMap.forEach((value, key) => {
  console.log(`${key}  = ${value}`);
});

// Clear all values from a Map:
// The clear() method is a built-in method of the Map object in JavaScript. It is used to remove all key-value pairs from a Map object. Here are some examples of how the clear() method can be used with Map:
userMap.clear();
console.log("After Clear :", userMap);

// Relation with Array objects
// In JavaScript, a Map object is a collection of key-value pairs that allows keys of any type, including objects, to be used as keys. A Map object can be created from an array of arrays, where each sub-array contains two elements, the key and the value. Here's an example:
const arr = [
  ["key1", "value1"],
  ["key2", "value2"],
];
const myMap = new Map(arr);
console.log(myMap);
console.log(myMap.get("key1"));

// To convert a Map object to an array, we can use the Array.from() method. Here's an example:
console.log(Array.from(myMap));

// Also use spread operator. Here's an example:
console.log([...myMap]);
