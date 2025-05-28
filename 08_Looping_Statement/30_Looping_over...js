user = {
  name: "sathish",
  age: 17,
  job: "developer",
  contact: 1234567890,
  city: "Coimbature",
};

let arr_keys = Object.keys(user);
console.table(arr_keys);

let arr_values = Object.values(user);
console.table(arr_values);

// print in normal for loop
for (let i = 0; i < arr_keys.length; i++) {
  console.log(arr_keys[i], ":", arr_values[i]);
  console.log(user[arr_keys[i]]);
}
