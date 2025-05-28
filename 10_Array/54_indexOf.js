students = ["Tiya", "Aureen", "Joes", "Zara", "Stanley", "Rajesh"];

let i = students.indexOf("Tiya");
console.log("Index : " + i);

i = students.indexOf("sathish");
console.log("Index : " + i); //returns -1 because sathish is not in list

// Also possible in String
let user = "Tutor Joes";
let index = user.indexOf("o");
console.log("Index : " + index);

index = user.indexOf("o", 5);
console.log("Index : " + index);
