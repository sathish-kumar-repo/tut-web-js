// Nullish coalescing operator
const a = null ?? "No value";
console.log(a);

const b = 25 ?? 45;
console.log(b);

const c = null ?? 45;
console.log(c);

// Nullish coalescing assignment operator(??=)

user = { name: "sathish" };
console.log(user);
console.log(user.name);
console.log(user.city);

user.city ??= "Salem";
console.log(user.city);
console.log(user);
