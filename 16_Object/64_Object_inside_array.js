// it is mosted important concepts because it is used in e-commerce website to show product and follow userdetails in social media
/*
Examples of usage include:
    * Storing a list of products in an e-commerce application
    * Storing a list of users in a social media application
    * Storing a list of events in a calendar application
*/

const users = [
  { name: "joes", age: 25, email: "joes@gmail.com" },
  { name: "ram", age: 32, email: "ram@gmail.com" },
  { name: "sam", age: 45, email: "sam@gmail.com" },
];

for (const user of users) {
  console.log(user.name);
}

const olderUsers = users.filter((user) => user.age > 30);
console.log(olderUsers);
