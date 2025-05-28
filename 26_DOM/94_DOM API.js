// createElement(tagName)
// createTextNode(text)
// appendChild(node)
// insertBefore(newNode, referenceNode)
// removeChild
// remove
// cloneNode

// --------------------------------

// createElement
let para = document.createElement("p");
para.innerHTML = "This is a <i>Sample Paragraph</i>";
// para.innerText = "This is a <i>Sample Paragraph</i>";
para.style.color = "brown";

// appendChild
const body = document.querySelector("body");
body.appendChild(para);

// insertBefore
let h1 = document.createElement("h1");
h1.innerHTML = "This is Heading";
h1.style.color = "red";
body.insertBefore(h1, para);

// removeChild
