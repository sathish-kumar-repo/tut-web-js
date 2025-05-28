/*
const promise = new Promise((resolve, reject) => {
  const sum = 2 + 1;
  if (sum == 2) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });
*/

// ------------------------------------------------------

/*
// setIimeout function
setTimeout(() => {
  console.log("Hi");
}, 250);

// Promise setTimeout function
function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
setTimeoutPromise(250).then(() => {
  console.log("Joes");
});

// promise = setTimeoutPromise(250);
// promise.then(() => {
//   console.log("Joes");
// });

// Callback hell is a phenomenon thst happens when multiple callbacks are nested on top of each other

setTimeout(() => {
  console.log("Normal : 1");

  setTimeout(() => {
    console.log("Normal : 2");

    setTimeout(() => {
      console.log("Normal : 3");
    }, 250);
  }, 250);
}, 250);

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

// setTimeoutPromise(250).then(() => {
//   console.log("Normal SetTime : 1");

//   setTimeoutPromise(250).then(() => {
//     console.log("Normal SetTime : 2");

//     setTimeoutPromise(250).then(() => {
//       console.log("Normal SetTime : 3");
//     });
//   });
// });

// To solve the callback hell, follow this promise
setTimeoutPromise(250)
  .then(() => {
    console.log("Cool Promise : 1");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("Cool Promise : 2");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("Cool Promise : 3");
  });
*/

// ------------------------------------------------------
/*
const button = document.querySelector("button");

function addEventPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

addEventPromise(button, "click").then((e) => {
  console.log("Clicked");
  console.log(e); // event property
});
*/
/*
console.log(Promise.resolve("Good")); // Promise { <state>: "fulfilled", <value>: "Good" }

// Promise.all([
//   Promise.resolve("Good"),
//   Promise.resolve("Good"),
//   Promise.resolve("Good"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.all([
//   Promise.resolve("Good"),
//   Promise.reject("Error"),
//   Promise.resolve("Good"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.any([
//   Promise.resolve("1"),
//   Promise.reject("Error"),
//   Promise.resolve("3"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log("not resolved");
//     console.error(error);
//   });

// Promise.race([
//   Promise.resolve("Good-1"),
//   Promise.reject("Good-2"),
//   Promise.resolve("Good-3"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// catch is not working, only then is working
Promise.allSettled([
  Promise.reject("Good-1"),
  Promise.resolve("Good-2"),
  Promise.resolve("Good-3"),
])
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });
console.log(Promise);



const promise = Promise.reject("Error");

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("All Completed..");
  });
 
const getPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post-1", "Post-2", "Post-3"];
      reject(posts);
    }, 1000);
  });
};

const getComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = ["Comment 1", "Comment 2", "Comment 3"];
      reject(comments);
    }, 2000);
  });
};

Promise.all([getPost(), getComments()])
  .then((results) => {
    console.log(results);
    const [posts, comments] = results;
    console.log(`Posts: ${posts}`);
    console.log(`Comments: ${comments}`);
  })
  .catch((err) => {
    console.error(err);
  });
*/

// fetch(http) is modern promise method and give both resolve and reject
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
