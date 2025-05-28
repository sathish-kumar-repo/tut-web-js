const btn = document.getElementById("btn");

btn.addEventListener("click", loadFile);

function loadFile() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);

  xhr.responseType = "json";

  xhr.onload = function () {
    if ((this.status = 200)) {
      this.response.slice(1, 10).forEach((card) => {
        output.innerHTML += `
        <div>
            <h4>${card.title}</h4>
            <img src="${card.thumbnailUrl}" loading='lazy'/>
        </div>
       `;
      });
    } else {
      console.error(`Error : ${this.status} - ${this.statusText}`);
    }
  };

  xhr.onprogress = function () {
    console.log("Onprogress Ready State", xhr.readyState);
  };

  xhr.onerror = function () {
    console.error("Request Error: Network issue or invalid URL.");
  };

  xhr.send();
}
