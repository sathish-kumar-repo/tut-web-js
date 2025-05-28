// Example 1: Using the for-in loop
const user1 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

for (let key in user1) {
  console.log(`${key}: ${user1[key]}`);
}

// Example 2: Using Object.keys()
const user2 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const keys = Object.keys(user2);
keys.forEach((key) => {
  console.log(`${key}: ${user2[key]}`);
});

// Example 3: Using Object.values()
const user3 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const values = Object.values(user3);
values.forEach((value) => {
  console.log(value);
});

// Example 4: Using Object.entries()
const user = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const entries = Object.entries(user);
console.log(entries); //give two dimensional array format
entries.forEach((entry) => {
  console.log(`${entry[0]}: ${entry[1]}`);
});

// In Normal for Loop using entries
/*
const person = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const entriess = Object.entries(person);
for (let i = 0; i < entriess.length; i++) {
  console.log(entriess[i][0] + ": " + entriess[i][1]);
}
*/
// In Normal for Loop using keys
const person = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const keyss = Object.keys(person);
for (let i = 0; i < keyss.length; i++) {
  console.log(keyss[i] + ": " + person[keyss[i]]);
}
