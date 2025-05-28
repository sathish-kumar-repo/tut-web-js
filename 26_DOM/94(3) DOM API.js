// classList.add()
// classList.remove()
// classList.toggle()
// getAttribute()
// setAttribute()


// hasAttribute()
// getAttributeNames()
// removeAttribute()


const btnAdd = document.querySelector("#btnAdd");
const btnToggle = document.querySelector("#btnToggle");
const btnRemove = document.querySelector("#btnRemove");
const box = document.querySelector(".box")

// classList.add()
btnAdd.addEventListener("click", function () {
  box.classList.add("new-color");
});

// classList.remove()
btnRemove.addEventListener("click", function () {
  box.classList.remove("new-color");
});

// classList.toggle()
btnToggle.addEventListener("click", function () {
  box.classList.toggle("new-color");
});


const btnClick = document.querySelector("#btnClick");
const input = document.querySelector("input");

btnClick.addEventListener("click", function () {
  // getAttribute()
  const getAtt = input.getAttribute("type");
  if (getAtt == "text") {
    // setAttribute()
    // setAttribute("What attribute","What Value")
    input.setAttribute("type", "password");
  } else {
    // setAttribute()
    input.setAttribute("type", "text");
  }
});

// hasAttribute()
console.log(input.hasAttribute("class"));

// getAttributeNames()
let list = input.getAttributeNames();
console.log(list);

// removeAttribute()
input.removeAttribute("name");
list = input.getAttributeNames();
console.log(list);