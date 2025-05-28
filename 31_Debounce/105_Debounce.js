const txtInput = document.getElementById("txtInput");

txtInput.addEventListener("keyup", function () {
  optimizeFunction();
});

// To count the API Call
let counter = 0;

const getDataFromApi = () => {
  console.log("Getting Data....", counter++);
};

const debounceMethod = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      //   console.log(this);
      //   console.log(arguments);
      //   fn();
    }, delay);
  };
};

const optimizeFunction = debounceMethod(getDataFromApi, 300);
