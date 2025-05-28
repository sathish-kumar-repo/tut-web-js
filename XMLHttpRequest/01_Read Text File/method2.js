const btn = document.getElementById("btn");

btn.addEventListener("click", loadFile);

function loadFile() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "01_Read Text File/sample.txt", true);
  console.log("ReadState", xhr.readyState);

  // By default its work if readystate is 4
  //! latest method
  xhr.onload = function () {
    console.log("ReadState", xhr.readyState);
    if (xhr.status === 200) {
      document.write(xhr.responseText);
    } else {
      console.error(`Error : ${xhr.status} - ${xhr.statusText}`);
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
