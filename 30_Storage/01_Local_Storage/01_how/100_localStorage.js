// Maximum usage is 5mb

// Create
localStorage.setItem("name", "Sathish");

// Get
let myName = localStorage.getItem("name");
console.log(myName);

// Remove
localStorage.removeItem("name");

// Clear
localStorage.setItem("name", "Sathish");
localStorage.setItem("age", "18");
localStorage.setItem("gender", "Male");
localStorage.setItem("City", "Madurai");

localStorage.clear();
