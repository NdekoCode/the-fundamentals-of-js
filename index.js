const myName = "Arick";
let age = 5;

if (age < 18) {
  console.log("Mineur");
} else if (age > 18 && age < 25) {
  console.log("Majeur");
} else if (age < 50 && age > 25) {
  console.log("Adulte");
} else {
  console.log("Trop vieu");
}
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
console.log(x + 1n === x + 2n); // 9007199254740992n === 9007199254740993n Va afficher => false

// Number

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 === 9007199254740992 Va afficher => true
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);

const username = "Ndekocode";
const greet = (greeting = "Hello") => {
  console.log(`${greeting} World`);
};
console.log(
  `Mon nom d'utilisateur sur github ${username} est un nom congolais`
);

greet("Salut");

const profile = {
  firstname: "Arick",
  lastname: "Bulakali",
  username: "Ndekocode",
  age: 55,
  color: "Blue",
};
const presentation = (profile) => {
  const { firstname, lastname, username } = profile;
  console.log(
    `Je suis ${firstname} ${lastname} et mon nom d'utilisateur est ${username}`
  );
};
presentation(profile);
