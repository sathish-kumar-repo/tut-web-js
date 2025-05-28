/*
  Form Events in JavaScript
      submit
      reset
      change

      checked
      blur
      focus
      input
     
*/

const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const course = document.querySelector("#course");
const checkbox = document.querySelector("#agree");
const radios = document.querySelectorAll('input[name="gender"]');

/*submit*/
form.addEventListener("submit", function (e) {
  /*
    In normal , fill the form and click submit button, then # symbol vanthu , data ellam refresh aagidum
        Reason
           * By default, form oda action neenga type pandra data vaa vera oru edathu ku tranfer pannu
           * So atha block panni enaku intha page la refresh aagama antha process sa pannu appadina intha function na use pannanum e.preventDefault();
    */

  e.preventDefault();
  console.log("Form Submitted");
  console.log("User Name : ", username.value);
  console.log("Email     : ", email.value);

  let selectedGender = "";
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedGender = radio.value;
    }
  });
  console.log("Gender :", selectedGender);
});

/*change*/
course.addEventListener("change", function (e) {
  const selectedCourse = e.target.value;
  console.log("Selected Course     : ", selectedCourse);
});

/*reset*/
form.addEventListener("reset", function (e) {
  console.log("Reset or Clear Form Data");
});

/*change*/
checkbox.addEventListener("change", function (e) {
  if (e.target.checked) {
    console.log("Checkbox is checked.");
  } else {
    console.log("Checkbox is unchecked.");
  }
});

/*input*/
// Each time ,it is trigger if user give input
username.addEventListener("input", function (e) {
  console.log("Username input changed:", e.target.value);
});

/*focus*/
// in focus
username.addEventListener("focus", function (e) {
  username.style.borderColor = "orange";
});

/*blur*/
// in out of focus
username.addEventListener("blur", function (e) {
  username.style.borderColor = "black";
});
