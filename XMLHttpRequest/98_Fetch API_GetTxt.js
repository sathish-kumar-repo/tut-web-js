const btnText = document.querySelector("#btn-text");
const outputText = document.querySelector("#txt-output");

btnText.addEventListener("click", getTextFile);

function getTextFile() {
  fetch("data.txt")
    .then((res) => res.text())
    .then((data) => {
      outputText.innerHTML = data;
    });
}
