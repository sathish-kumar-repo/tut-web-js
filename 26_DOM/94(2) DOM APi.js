/*
style
innerHTMl
innerText

CloneNode()
setInterval()
*/

// style
const h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.backgroundColor = "palegreen";
h1.style.padding = "20px";

// innerHTML
h1.innerHTML = "Learn More <i>Be Smart</i>";

// innerText
h1.innerText = "Learn More <i>Be Smart</i>";

// cloneNode()
const body = document.querySelector("body");
let cloneH1 = h1.cloneNode(true); //with Content
let cloneH2 = h1.cloneNode(false); //without Content
body.appendChild(cloneH1);
body.appendChild(cloneH2);

// setInterval()
let clockDiv = document.querySelector(".clock");
clockDiv.style.fontSize = "30px";
function clock() {
  const date = new Date();

  const time =
    date.getHours() +
    " : " +
    date.getMinutes() +
    " : " +
    date.getSeconds() +
    " : " +
    date.getMilliseconds();
  clockDiv.innerHTML = time;
}

setInterval(clock, 1000);
