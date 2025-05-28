// Merging Maps in JavaScript
// In JavaScript, maps can be merged using the spread operator and an array. This allows you to combine the key-value pairs from multiple maps into a new map.

//Maps can be merged with Arrays
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
const second = new Map([
  [1, "first"],
  [2, "second"],
]);
const merged = new Map([...first, ...second, [1, "Ist"]]);
console.log(merged);
console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));

// ***********************************

// Counting Word Frequency in JavaScript
const sentence =
  "Fear leads to anger anger leads to hatred hatred leads to conflict";
const words = sentence.split(" ");
console.log(words);
const wordFrequency = new Map();
for (let word of words) {
  if (wordFrequency.has(word)) {
    wordFrequency.set(word, wordFrequency.get(word) + 1);
  } else {
    wordFrequency.set(word, 1);
  }
}
console.log(wordFrequency);

// ***********************************

// Grouping Objects by Property Value in JavaScript
const people = [
  { name: "Raja", age: 30 },
  { name: "Sara", age: 25 },
  { name: "Suresh", age: 30 },
  { name: "Sundar", age: 25 },
];

const peopleByAge = new Map();
for (let person of people) {
  const age = person.age;
  if (peopleByAge.has(age)) {
    peopleByAge.get(age).push(person);
  } else {
    peopleByAge.set(age, [person]);
  }
}

// ***********************************

// Counting the Frequency of Elements in an Array with JavaScript
function frequencyCounter(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    map.set(element, (map.get(element) || 0) + 1);
  }
  return map;
}

const array = [1, 2, 3, 1, 2, 2, 4];
console.log(frequencyCounter(array));
// Output: Map(4) { 1 => 2, 2 => 3, 3 => 1, 4 => 1 }

const array2 = [1, 54, 1, 52];
console.log(frequencyCounter(array2));
// Output: Map(3) { 1 => 2, 54 => 1, 52 => 1 }
