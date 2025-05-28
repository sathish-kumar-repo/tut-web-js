//Type Conversion

let a;
// Number to String
a = 25;
console.log(a, typeof a);
a = String(25);
console.log(a, typeof a);

// Number to String
a = 25.5;
console.log(a, typeof a);
a = String(25.5);
console.log(a, typeof a);

// Boolean to String
a = true;
console.log(a, typeof a);
a = String(true);
console.log(a, typeof a);

// Date to String
a = new Date();
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

// Array to String
a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

// Also using toString()
a = 25;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);


// String to number
a = "1234";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

// Boolean to String
a = true;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

// Array to Number
a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

// String to Number
a = "Sathish Kumar";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

// String to int
a = "35";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

// String to int
a = "35.55";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

// String to float
a = "35.55";
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);
