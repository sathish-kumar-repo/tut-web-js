//Label block in javaScript
groups = [
  ["Rahul", "Sam", "Ravi"],
  ["Sathish", "Karthi", "Sri"],
  ["Raja", "Banu", "Reeghan"],
];

for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("R")) {
      console.log("Found One Starting with R", member);
      break inner;
    }
  }
}
