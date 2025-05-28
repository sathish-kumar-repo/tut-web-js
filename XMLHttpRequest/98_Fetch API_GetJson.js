const btnJson = document.querySelector("#btn-json");
const outputJson = document.querySelector("#json-output");

btnJson.addEventListener("click", getJsonData);

function getJsonData() {
  fetch("users.json")
    .then((res) => res.json())
    .then((users) => {
      let data = "<ul>";
      users.forEach((user) => {
        data += `<li>${user.name} : ${user.age}</li>`;
      });
      data += "</ul>";
      outputJson.innerHTML = data;
    });
}
