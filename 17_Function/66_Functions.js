// No Return Type Without Argument Function
function addTwoNo() {
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
}
addTwoNo();

// No Return Type With Argument Function
function sub(a, b) {
  c = a - b;
  console.log("Difference : ", c);
}

sub(25, 2);

// Return Type Without Argument Function
function mul() {
  a = 10;
  b = 20;
  c = a * b;
  return c;
}

x = mul();
console.log("Mul ", x);

// Return Type With Argument Function
function div(a, b) {
  c = a / b;
  return c;
}

x = div(25, 2);
console.log("Division ", x);

// Function with Arbitrary arguments

// using arguments keyword
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// using spread operator
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Function as Expression
const adding = function (a, b) {
  return a + b;
};
console.log(adding(1, 2)); // 3

// Arrow Function
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2)); // 3

const add1 = (a, b) => a + b;
console.log(add1(1, 2)); // 3

// Default Parameter Function
function addition(a, b = 5) {
  return a + b;
}
console.log(addition(25, 30));
console.log(addition(25));

// Function hoisting

// Function Declaration
hoistedFunction(); // Output: "I'm a hoisted function"
function hoistedFunction() {
  console.log("I'm a hoisted function");
}

// Function Expression
// notHoistedFunction();
// the above code is uncommand , its Reference show error
let notHoistedFunction = function () {
  console.log("I'm a function expression");
};

// Nested Function
function outerFunction() {
  let outerVariable = "I am a variable in the outer function";

  function innerFunction() {
    let innerVariable = "I am a variable in the inner function";
    console.log(outerVariable); // Output: "I am a variable in the outer function"
    console.log(innerVariable); // Output: "I am a variable in the inner function"
  }

  innerFunction();
}
outerFunction();

// Lexical scope

var globalVariable = "I am a global variable";

function outerFunction() {
  let outerVariable = "I am a variable in the outer function";

  function innerFunction() {
    let innerVariable = "I am a variable in the inner function";
    console.log(globalVariable); // Output: "I am a global variable"
    console.log(outerVariable); // Output: "I am a variable in the outer function"
    console.log(innerVariable); // Output: "I am a variable in the inner function"
  }

  innerFunction();
}
outerFunction();

// For more details visist my app