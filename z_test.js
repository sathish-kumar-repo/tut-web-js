// // console.log(NaN);
// // console.log(NaN == NaN);
// // console.log(NaN === NaN);
// const myMap3 = new Map();
// myMap3.set(NaN, "Not a Number");

// console.log(myMap3.has(NaN)); // false  // but my output is true
// console.log(isNaN([...myMap3.keys()][0])); // true
// console.log(myMap3.keys());
// console.log([...myMap3.keys()][0]);

// const arr = [
//   [2000, 95, 327, 42.5],
//   [565, 50, 32.5, 27],
//   [515, 55.3, 71, 3.5],
//   [450, 44, 50, 13],
//   [752, 76, 85, 10],
//   [380, 42.6, 56, 0.7],
//   [600, 36, 35.5, 36],
//   [300, 3, 80, 1],
// ];
// let calories = 0;
// let protein = 0;
// let carbs = 0;
// let fats = 0;

// arr.forEach((each) => {
//   calories += each[0];
//   protein += each[1];
//   carbs += each[2];
//   fats += each[3];
// });

// console.log(`
// calories  :${calories}kcal
// protein   :${protein}g
// carbs     :${carbs}g
// fats      :${fats}g
// `);

for (let index = 0; index < 10000; index++) {
  localStorage.setItem(index.toString(), index.toString());
}
