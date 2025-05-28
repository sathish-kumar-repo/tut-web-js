// remove

const removeBtns1 = document.querySelectorAll(".btnRemove");
removeBtns1.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tr = this.parentNode.parentNode;
    tr.remove();
  });
});

const removeBtns2 = document.querySelectorAll(".btnRemove");
removeBtns2.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tr = this.parentNode.parentNode;
    let Agetd = tr.childNodes[5];
    console.log(Agetd);
    tr.removeChild(Agetd);
  });
});
