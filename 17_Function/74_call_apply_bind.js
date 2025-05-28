function sathish() {
  console.log(this);
}
console.log(sathish.name); // function name
console.log(sathish.toString()); // function name to string
// sathish();  // normal method

sathish.call(); // same result as sathish()

// var user_name = "Sathish";
function welcome() {
  console.log("Welcome " + this.user_name);
}

welcome(); // welcome.call()

const stud = { user_name: "Raja" };
welcome.call(stud); // refer stud object

// ------------------------------

// call
function total(eng, mat) {
  console.log(this.name + " got " + (eng + mat) + " Marks");
}

const user1 = { name: "Ram" };
total.call(user1, 65, 75); // Ram got 140 Marks

// ------------------------------

// apply
function total(eng, mat) {
  console.log(this.name + " got " + (eng + mat) + " Marks");
}

const user2 = { name: "Ram" };
total.apply(user2, [65, 75]); // Ram got 140 Marks

// ------------------------------

// bind
function total(eng, mat) {
  console.log(this.name + " got " + (eng + mat) + " Marks");
}

const user = { name: "Ram" };
const fun = total.bind(user, 65, 75);
fun(); // Ram got 140 Marks

// ------------------------------

// Also possible borrow method from one object to another object using call or bind or apply
const person = {
  firstName: "Sathish",
  lastName: "Kumar",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

anotherPerson = {
  firstName: "Ram",
  lastName: "Kumar",
};
console.log(person.fullName.call(anotherPerson));
