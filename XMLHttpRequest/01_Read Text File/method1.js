const btn = document.getElementById("btn");

btn.addEventListener("click", loadFile);

function loadFile() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "01_Read Text File/sample.txt", true);
  console.log("ReadState", xhr.readyState);

  //   its handle 2, 3, 4 state

  xhr.onreadystatechange = function () {
    console.log("ReadState", xhr.readyState);
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.write(xhr.responseText);
      } else {
        console.error(`Error : ${xhr.status} - ${xhr.statusText}`);
      }
    }
  };

  xhr.send();
}
