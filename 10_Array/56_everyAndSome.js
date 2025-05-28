n = [12, 18, 10, 8];

// every()
let result = n.every((value) => {
  return value % 2 == 0;
});

console.log("All Elements are Even :", result);

// some()
result = n.some((value) => {
  return value % 2 == 0;
});

console.log("All Elements are Even :", result);

// Also possible
function checkEven(value) {
  return value % 2 == 0;
}

result = n.every(checkEven);

console.log("checkEven All Elements are Even :", result);

// ---------------------------------

const users = [
  { name: "Ram", age: 25 },
  { name: "Tiya", age: 45 },
  { name: "Raja", age: 18 },
  { name: "Sara", age: 12 },
];

function isEligible(element) {
  return element.age >= 18;
}

result = users.every(isEligible);
console.log("Every Eligible :", result);

result = users.some(isEligible);
console.log("Some Eligible :", result);
