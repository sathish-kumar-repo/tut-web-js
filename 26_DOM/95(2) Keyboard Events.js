/*
  2.Keyboard
    Keydown
    keypress (deprecated)
    keyup
    key
    code
  */

document.addEventListener("keydown", handleKeyEvent); //first trigger
document.addEventListener("keypress", handleKeyEvent);
document.addEventListener("keyup", handleKeyEvent);

// Event da parameter aa pass pannanum
function handleKeyEvent(event) {
  const eventType = event.type;
  const keyCode = event.code;
  const keyName = event.key;
  console.log(`Event type: ${eventType}`);
  console.log(`Key code: ${keyCode}`);
  console.log(`Key name: ${keyName}`);
}

//-----------------------------------------------------------

const input = document.getElementById("input-num");
const msg = document.getElementById("error");

input.addEventListener("keydown", function (event) {
  const key = event.key;
  console.log(key);
  if (isNaN(key)) {
    event.preventDefault();
    msg.textContent = "Please Enter Number only";
  } else {
    msg.textContent = "";
  }
});

//-----------------------------------------------------------
