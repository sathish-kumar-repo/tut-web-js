// To style brand
let brand = document.getElementById("brand");

console.log(brand); // to print html element
console.log(brand.nodeType); // output: 1 , that is it is element node default value is 1(constant value)
console.log(brand.nodeName); // output: H3

brand.style.backgroundColor = "purple";
brand.style.color = "white";

let stitle = document.getElementsByClassName("sub-title");

console.log(stitle); // to print html collection is not an array, it is only use in normal for loop , forEach is not possible to use

// stitle.style.color = "Red"; // error because it is collection not access simultaneosuly
// Solution is
stitle[0].style.color = "Red";
stitle[1].style.color = "Red";

/*
// it is not possible
stitle.forEach((element) => {
  element.style.color = "Red";
});
*/

for (let i = 0; i < stitle.length; i++) {
  stitle[i].style.color = "blue";
}

let para = document.getElementsByTagName("p");
console.log(para);

for (let i = 0; i < para.length; i++) {
  para[i].style.color = "purple";
}

let heading = document.querySelector("h1"); // it is also pass class, id,tag name
console.log(heading);
heading.style.color = "orange";

// to select multiple elements and return node list

// it is speciality
//Use forEach, that is, it is array format
let qpara = document.querySelectorAll("p");
console.log(qpara); // to get node objects
qpara.forEach((element) => {
  element.style.color = "blue";
});
