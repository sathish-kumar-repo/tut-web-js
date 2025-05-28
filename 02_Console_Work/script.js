// console.log is used to code check or debug(developer use panuvanga)

console.log("Hello world");
console.log(6 + 6);
console.log(123456);
console.log(true);
console.log(2 > 3);
console.log([2, 3, 4, 5, 6]);

// json value(object and value)
console.log({ fname: "sathish", age: 25 });
console.table({ fname: "sathish", age: 25 });

// To show error in console
console.error("Custom sample error");

// To show warn in console
console.warn("Warning");

// To clear the console
console.clear();

// Any name give (EG.."Timer")
console.time("Timer");
for (i = 0; i < 100; i++) {
  console.log(i);
}
console.timeEnd("Timer");
