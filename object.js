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
console.log("Les noms dans ma liste sont: " + Object.values(names).join(" "));
