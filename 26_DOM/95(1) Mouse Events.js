const btn = document.querySelector(".btn");
/*
btn.addEventListener("click", function () {
  alert("Welcome to Tutor Joes");
});
*/

btn.addEventListener("dblclick", function () {
  alert("Your are dblclicked");
});

// if mousemove is work, then mouseover is not work
btn.addEventListener("mousemove", function () {
  this.style.backgroundColor = "purple";
});

btn.addEventListener("mouseup", function () {
  this.style.backgroundColor = "blue";
});

btn.addEventListener("mouseover", function () {
  this.style.backgroundColor = "orange";
});

btn.addEventListener("mousedown", function () {
  this.style.backgroundColor = "Red";
});

btn.addEventListener("mouseout", function () {
  this.style.backgroundColor = "yellow";
});
