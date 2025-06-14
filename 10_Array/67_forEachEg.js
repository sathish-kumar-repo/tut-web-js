// 1. Example of using the forEach method to print each element of an array:

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));

// 2. Example of using the forEach method to sum all elements of an array:

const numbers1 = [1, 2, 3, 4, 5];
let total = 0;
numbers1.forEach((number) => {
  total += number;
});
console.log(total); // 15

// 3. Example of using the forEach method to create a new array from an existing one:

const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = [];
numbers2.forEach((number) => {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 4. Example of using the forEach method to find the max element of an array:

const numbers3 = [1, 2, 3, 4, 5];
let max = numbers3[0];
numbers3.forEach((number) => {
  if (number > max) {
    max = number;
  }
});
console.log(max); // 5

// 5. Example of using the forEach method to calculate the average of an array:

const numbers5 = [1, 2, 3, 4, 5];
let tot = 0;
let count = 0;
numbers5.forEach((number) => {
  tot += number;
  count++;
});
console.log(tot / count); // 3
console.log(tot / numbers5.length); // 3

// 6. Example of using the forEach method to filter an array:

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
numbers4.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// 7. Example of using the forEach method to update elements of an array:

const names = ["John", "Mike", "Bob", "Jane"];
names.forEach((name, index) => {
  names[index] = name.toUpperCase();
});
console.log(names); // ['JOHN', 'MIKE', 'BOB', 'JANE']

// 8. Example of using the forEach method to to remove elements from an array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number, index) => {
  if (number > 5) {
    numbers.splice(index, 1);
  }
});
console.log(numbers); // [1, 2, 3, 4, 5]

// 9. Example of using the forEach method to check if an element exists in an array:

const fruits1 = ["apple", "banana", "cherry"];
let exists = false;
fruits1.forEach((fruit) => {
  if (fruit === "banana") {
    exists = true;
  }
});
console.log(exists); // true

// 10. Example of using the forEach method to check concat array element:

const words = ["hello", "world"];
let concat = "";
words.forEach((word) => {
  concat += word + " ";
});
console.log(concat); // "hello world "
