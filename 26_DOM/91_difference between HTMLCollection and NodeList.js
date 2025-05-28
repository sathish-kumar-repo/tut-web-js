// HTML Collection

// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li.length);

// let element = document.createElement("li");
// element.innerHTML = "JavaScript";

// li[0].parentNode.appendChild(element); // in html all tag are node
// console.log(li);
// console.log(li.length);

// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "orange";
// }

// NodeList

let li = document.querySelectorAll("li");
console.log(li);
console.log(li.length);

let element = document.createElement("li");
element.innerHTML = "JavaScript";

li[0].parentNode.appendChild(element);
console.log(li);
console.log(li.length);

//  Query selectors antha time la select panni antha value va eduthu vachukum,only change in dom and marupadi query selector use panni select panna automatica change aagidum
li.forEach((element) => {
  element.style.color = "orange";
});

li = document.querySelectorAll("li");
console.log(li);
console.log(li.length);
