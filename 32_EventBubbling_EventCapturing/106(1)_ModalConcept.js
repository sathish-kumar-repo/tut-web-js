const btnModal = document.querySelector("#btnModal");
const modal = document.querySelector("#modal");
const btnSubmit = document.querySelector("#btnSubmit");
const txtName = document.querySelector("#txtName");

btnModal.addEventListener("click", function () {
  modal.style.display = "flex";
});
modal.addEventListener("click", function () {
  modal.style.display = "none";
});

btnSubmit.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Submit button Pressed");
});
txtName.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Input Click");
});
