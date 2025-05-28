// conditional or ternary operator (?:)

const age = 15;
const result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

//this is used to handling null values

function welcome1(name) {
  console.log("Welcome " + name);
}

welcome1();
welcome1(null);

// this is used to also handle null value
function welcome(name) {
  const result = name ? name : "No name";
  console.log("Welcome " + result);
}

welcome();
welcome(null);
welcome("Sathish");

// In object type, handling the null value

users = { name: "sathish", age: 17 };
console.log(users);
console.log(users.name);

// Functions as Expression

const greetings = (user) => {
  const name = user.name ? user.name : "No name";
  return "Hello " + name;
};

console.log(greetings(users));
