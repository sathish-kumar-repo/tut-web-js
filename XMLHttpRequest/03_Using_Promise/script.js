const btn = document.getElementById("btn");

function loadFileWithPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.responseType = "json";

    xhr.onload = function () {
      if (this.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(`HTTP Error: ${xhr.status} - ${xhr.statusText}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Request Error: Network issue or invalid URL."));
    };

    xhr.send();
  });
}

btn.addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  loadFileWithPromise(url)
    .then((data) => {
      data.slice(1, 1000).forEach((card) => {
        output.innerHTML += `
            <img src="${card.thumbnailUrl}" loading='lazy'/>
       `;
      });
    })
    .catch((e) => {
      console.error(e);
    });
});
