const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// By Default => Event Bubbling (Upwards)
/*
grandparent.addEventListener("click", function () {
  console.log("Grandparent Clicked");
});

parent.addEventListener("click", function () {
  console.log("Parent Clicked");
});

child.addEventListener("click", function (e) {
  console.log("Child Clicked");
});
*/

// Event Capturing (Downwards)
/*
grandparent.addEventListener(
  "click",
  function () {
    console.log("Grandparent Clicked");
  },
  true
);

parent.addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  true
);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child Clicked");
  },
  true
);
*/

// Combination of true and false (First work Capturing and Last work Bubbling)
/*
grandparent.addEventListener(
  "click",
  function () {
    console.log("Grandparent Clicked");
  },
  true
);

parent.addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  false
);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child Clicked");
  },
  true
);
*/

// StopPropagetion

grandparent.addEventListener(
  "click",
  function () {
    console.log("Grandparent Clicked");
  },
  true
);

parent.addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  false
);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child Clicked");
    e.stopImmediatePropagation();
  },
  true
);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child Clicked 2");
    e.stopPropagation();
  },
  true
);
