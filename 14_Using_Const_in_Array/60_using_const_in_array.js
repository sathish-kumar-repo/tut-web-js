const a = 10;
console.log(a);
// a = 25;
// it is error because it is primitive type and also declare in const keyword


// but is possible to array type
// declare the array in const and also change the variable in existing array but not allow new array in same variable
const users = ["Ram", "Sam", "Ravi"];
users.push("Tiya");
console.log(users);

// above code is execute properly and also no error
// reason: value only add in array and stored in heap memory, it is not change the references (memory address) but it is not allow reassign but modify the variable inside in array
