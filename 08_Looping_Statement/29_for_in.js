//for in loop used in object(that is key and pair)

users = {
  name: "sathish",
  age: 17,
  job: "developer",
};

for (let prop in users) {
  console.log(prop, ":", users[prop]);
}
