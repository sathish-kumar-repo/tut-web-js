const btn = document.getElementById("btn");

btn.addEventListener("click", loadFile);

function loadFile() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "02_Read Json File/local/db.json", true);

  //! If you Mention Type need not use JSON.parse (responseText not working becuase its json)
  xhr.responseType = "json";

  xhr.onload = function () {
    if ((this.status = 200)) {
      // console.log(this.responseText);
      //   const data = JSON.parse(this.response);
      //   console.log(this.response);
      const data = this.response;
      data.forEach((person) => {
        output.innerHTML += `
        <div>
            <h4>Name: ${person.first_name} ${person.last_name}</h4>
            <p>${person.email}</p>
            <p>${person.gender}</p>
        </div>
       `;
      });
    } else {
      console.error(`Error : ${this.status} - ${this.statusText}`);
    }
  };

  xhr.onerror = function () {
    console.error("Request Error: Network issue or invalid URL.");
  };

  xhr.send();
}
