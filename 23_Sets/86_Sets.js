const users = ["ram", "sathish", "ram", "sam"];
console.log(users);

const UniqueUsersSet = new Set(users);
console.log(UniqueUsersSet);

//Using spread operator convert set to array

// const UniqueUsersArray = [...UniqueUsersSet];
const UniqueUsersArray = [...new Set(users)];
console.log(UniqueUsersArray);

//To create empty set
const myset1 = new Set();
console.log(myset1);

const myset2 = new Set([1, 2, 3, 4, 5]);
console.log(myset2);

//---------------------------------------------

//Function

// Creating Sets:
const mySet = new Set();

// Adding and Removing Values:
mySet.add(4);
mySet.add(4).add(5);
mySet.delete(4);

// Checking Set Size:
console.log(mySet.size); // Output: 3

// Checking for Values:
// You can check if a value exists in a set using the has() method:
console.log(mySet.has(2)); // Output: false
console.log(mySet.has(5)); // Output: true

// Iterating Over Sets:
mySet.forEach((value) => console.log(value));

// Converting Sets to Arrays:
const myArray = [...mySet];

// entries()
// Here's an example of how to use the entries() method to iterate over the [value, value] pairs for each value in a set:

const set = new Set(["apple", "banana", "cherry"]);
const iterator = set.entries();
console.log(iterator.next().value); // Output: ['apple', 'apple']
console.log(iterator.next().value); // Output: ['banana', 'banana']
console.log(iterator.next().value); // Output: ['cherry', 'cherry']
console.log(mySet);

// clear()
const NewSet = new Set([1, 2, 3]);
console.log(NewSet);
NewSet.clear();
console.log(NewSet);

// keys()
// Here's an example of how to use the keys() method to iterate over the values in a set:

const sets = new Set(["apple", "banana", "cherry"]);
const iteratorkeys = sets.keys();
console.log(iteratorkeys.next().value); // Output: 'apple'
console.log(iteratorkeys.next().value); // Output: 'banana'
console.log(iteratorkeys.next().value); // Output: 'cherry'

//--------------------------------------

// function

// from()
const arr = [1, 2, 3, 3, 4, 5, 5];
const set1 = new Set.from(arr);
console.log(set1); // Output: Set {1, 2, 3, 4, 5}

// We can also use the from() method to create a new set from a string:
const str = "hello";
const set2 = new Set.from(str);
console.log(set2); // Output: Set {'h', 'e', 'l', 'o'}

// isSet()
const set3 = new Set([1, 2, 3]);
console.log(Set.isSet(set3)); // Output: true
const array = [1, 2, 3];
console.log(Set.isSet(array)); // Output: false

// of()
// of() method to create a new set with a variable number of arguments:
const set4 = new Set.of(1, 2, 3);
console.log(set4); // Output: Set {1, 2, 3}

// single value:
const set5 = new Set.of(1);
console.log(set5); // Output: Set {1}

// Tag Widget
// Here is the real time example for unique tag widget for website or blog.
class TagsInput {
  constructor() {
    this.tags = new Set();
  }
  addTag(newTag) {
    this.tags.add(newTag);
    console.log(this.tags);
  }
}

const input = new TagsInput();
input.addTag("Ram");
input.addTag("Sam");
input.addTag("Ram");
input.addTag("Ravi");
