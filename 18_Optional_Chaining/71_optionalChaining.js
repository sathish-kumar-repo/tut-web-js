// Navigating Complex Data Structures with Optional Chaining
const user1 = {
  name: "Sathish",
  address: {
    city: "Salem",
  },
};

console.log(user1);
// console.log(user1.address) //This is error
// console.log(user1.address.city) //This is error

// How to handling this error

// in normal method
const user2 = {
  name: "Sathish",
  // address:{
  //     city:"Salem"
  // }
};

// Option-1
console.log(user2.address ? user2.address.city : undefined);

// Option-2
console.log(user2.address && user2.address.city);

// Option-3 is optional chaining
console.log(user2.address?.city);

// Option-4
let key = "city";
console.log(user2.address?.[key]);

const user = {
  firstName: "Tutor",
  lastName: "Joes",
  address: {
    street: "Cherry Road",
    city: "salem",
    contact: "9043017689",
  },
};

console.log(user?.firstName);
console.log(user?.address?.contact);

// Optional chaining is only used for read and delete only not allow to assign new key
// For example

// user?.newname = "Sathish" // error

console.log(user);
