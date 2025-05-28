/*
  4.Touch
    touchstart  => mousedown in desktop
    touchmove   => move event
    touchend    => mouseup
    touchcancel => press the backmenu in mobile
*/

const touchArea = document.getElementById("touchArea");

// touchstart
touchArea.addEventListener("touchstart", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "blue";
  touchArea.textContent = "Touch Started !";
});

// touchmove
touchArea.addEventListener("touchmove", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "green";
  touchArea.textContent = "Touch Moved !";
});

// touchend
touchArea.addEventListener("touchend", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "gray";
  touchArea.textContent = "Touch Ended !";
});

// touchcancel
touchArea.addEventListener("touchcancel", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "red";
  touchArea.textContent = "Touch Cancelled !";
});
