// Fill(value,start,end)
// it change the original array

let n = [1, 2, 3, 4, 5, 6];
console.log("Before Fill : ", n);
n.fill(20);
console.log("After Fill  : ", n);

console.log("--------");

n = [1, 2, 3, 4, 5, 6];
console.log("Before Fill : ", n);
n.fill(20, 3);
console.log("After Fill  : ", n);

console.log("--------");

n = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Before Fill : ", n);
n.fill(20, 3, 5);
console.log("After Fill  : ", n);
