const names = {
  a: "Guillome",
  b: "Antoine",
  c: "Marie",
};
const greeting = "Salut";
if (names.a === "Antoine") {
  console.log(`${greeting} Antoine`);
} else if (names.a === "Guillome") {
  console.log(`${greeting} Guillome`);
} else {
  console.log(`${greeting} Marie`);
}
console.log(Array.isArray(Object.values(names)));
console.log("Les noms dans ma liste sont: " + Object.values(names).join(" "));
let table = [1, 2, 3, 4, 5];
let alphabet = ["a", "b", "c", "d", "e"];
console.log("Convertion of array in string output: " + table.toString());
table.push(6);
console.log("Adding 6 in the table ", table);
console.log(
  "Merge two array:",
  table,
  " and ",
  alphabet,
  "output: NB: it's a new array will be retourn"
);
console.log(table.concat(alphabet));
console.log(table);

console.log(Date.now()); // Retourne the tiles
