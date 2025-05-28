let first_name = "Sathish";
let last_name = "Kumar";

// Concatenation using +
let c = first_name + " " + last_name;
console.log("Concatenation : " + c);


// Concatenation using concat method
c = first_name.concat(" ", last_name);
console.log("Concat : " + c);


// Append the String to end string
c = "Sathish ";
c += "Kumar";
console.log("Append : " + c);


// Escaping String
c = "She Can't run";
c = 'She Can\'t run';
console.log(c);


// Length of String
c = first_name.length;
console.log("Length : " + c);


// Change Case
c = first_name.toUpperCase();
console.log("Uppercase : " + c);
c = first_name.toLowerCase();
console.log("Lowercase : " + c);


// Find index of String
c = first_name.indexOf("T");
console.log("indexOf T : " + c);


// Find index of String at last
c = first_name.lastIndexOf("T");
console.log("lastIndexOf T : " + c);


// To find the character based on index value
c = first_name.charAt(1);
console.log("charAt 1 : " + c);


// similarly but print ASCII value
c = first_name.charCodeAt(1);
console.log("charCodeAt 1 : " + c);


// Slice the first 3 character using substr() function
c = first_name.substr(0, 3);
console.log("substr : " + c); //strike represent deprecate function that means it is old version, mostly not used


// Substring
let text = "01234567890";


// Slice the first 4 character using substring() function
c = text.substring(0, 4);
console.log("Substring : " + c);


// print from 4th index to end
c = text.substring(4);
console.log("Substring : " + c);


// itd special
// do like that starting index is greater that ending index, automatically starting represent ending index and ending index represent starting index(that means interchange the number in automatically)
c = text.substring(4, 0);
console.log("Substring : " + c);

 
// Wrong index value to print empty
c = text.substring(25, 30);
console.log("substring Invalid Length : " + c);


// Negative index and print complete data
c = text.substring(-3);
console.log("-3 : " + c);


// Slice
// print from 2nd index to 4 th index
c = text.slice(2, 4);
console.log("slice : " + c);


// print empty because greater index to smaller index but instead subtring interchange the position according to number and return output
c = text.slice(4, 2);
console.log("slice : " + c);


// Wrong index value and print empty similarly to substring
c = text.slice(25, 30);
console.log("slice Invalid Length : " + c);


// Also possible to negative index and print last five character
c = text.slice(-5);
console.log("slice -5: " + c);


// Split Function
let a = "Sathish Kumar Computer Education";
c = a.split(" ");
// its print array format
console.log("Split : ", c);
console.table(c);


// Replace Function
a = "I am from Salem";
console.log("Before Replace : " + a);
c = a.replace("Salem", "Chennai");
console.log("After Replace : " + c);


// Includes Function (return true if string is exist in Array otherwise return false)
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("rat"));


// Trim Function
// it is uesd to remove unwanted white space in front and back
a = " Sathish ";
console.log("Before Trim : " + a.length);


b = a.trim();
console.log("After Trim : " + b.length);
c = a.trimEnd();
console.log("After trimEnd : " + c.length);
d = a.trimStart();
console.log("After trimStart : " + d.length);


// padStart padEnd
// To add any character before the value and convert to n digit
a = "5";
a = a.padStart(4, 0);
console.log(a);


// padEnd
// To add any character after the value and convert to n digit
a = "5";
a = a.padEnd(4, 0);
console.log(a);


// Also possible to add any character
a = "5";
a = a.padEnd(4, "$");
console.log(a);


// Return the character form ASCII Value
console.log(String.fromCharCode(65, 66, 67, 68, 97, 98, 122));


// Long literal strings:
// There are three ways to create a long literal string in javascript.First, by using the + operator to concatenate multiple strings, and second by using the \ to indicate a line continuation and thrid using template String


// Method-1
let longString =
  "C is a powerful general-purpose programming language" +
  "developed at AT & T's Bell Laboratories of USA in 1972" +
  "it was designed and written by Dennis Ritchie..";
console.log(longString);


// Method-2
longString =
  "C is a powerful general-purpose programming language \
developed at AT & T's Bell Laboratories of USA in 1972\
it was designed and written by Dennis Ritchie..";
console.log(longString);


// Method -3
let full_name = "Sathish Kumar";
let age = "25";
let city = "Chennai";
let role = "CEO";


let output = "";
output =
  "<table border='1'><tr><th>Name</th><td>" +
  full_name +
  "</td></tr><tr><th>Age</th><td>" +
  age +
  "</td></tr><tr><th>City</th><td>" +
  city +
  "</td></tr><tr><th>Role</th><td>" +
  role +
  "</td></tr></table>";


//es5
output +=
  "<hr><table border='1'>" +
  "<tr><th>Name</th><td>" +
  full_name +
  "</td></tr>" +
  "<tr><th>Age</th><td>" +
  age +
  "</td></tr>" +
  "<tr><th>City</th><td>" +
  city +
  "</td></tr>" +
  "<tr><th>Role</th><td>" +
  role +
  "</td></tr>" +
  "</table>";

  
//es6
output += `<hr>
<table border='1'>
  <tr><th>Name</th><td>${full_name}</td></tr>
  <tr><th>Age</th><td>${age >= 25 ? "Good" : "Bad"}</td></tr>
  <tr><th>City</th><td>${city}</td></tr>
  <tr><th>Role</th><td>${role}</td></tr>
</table>`;

// document.body.innerHTML = output;
