// In ES5
function objectify1(key, val) {
  let obj = {};
  obj[key] = val;
  return obj;
}
console.log("In ES5", objectify1("name", "sathish"));

// In ES6
function objectify2(key, val) {
  return {
    [key]: val,
  };
}
console.log("In ES6", objectify2("name", "sathish"));

// -------------------------------------

// Destructuring assignment
const key1 = "name";
const key2 = "age";
const value1 = "Sathish";
const value2 = 35;
const user = {
  [key1]: value1,
  [key2]: value2,
};
console.log(user);

const { [key1]: pname } = user;
console.log(pname);
