const myName = "Arick";
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
console.log(x + 1n === x + 2n); // 9007199254740992n === 9007199254740993n Va afficher => false

// Number

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 === 9007199254740992 Va afficher => true
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);

const profile = {
  firstname: "Arick",
  lastname: "Bulakali",
  username: "Ndekocode",
  age: 55,
  color: "Blue",
};
const { firstname, lastname, username } = profile;
console.log(firstname, lastname, username);
const greet = (greeting = "Hello") => {
  console.log(`${greeting} World`);
};
console.log(
  `Mon nom d'utilisateur sur github ${username} est un nom congolais`
);

greet("Salut");

const presentation = ({ firstname, lastname, username }) => {
  console.log(
    `Je suis ${firstname} ${lastname} et mon nom d'utilisateur est ${username}`
  );
};
presentation(profile);

const scores = [24, 25, 27];

let [score1, score2, score3] = scores;
console.log(score1);
console.log(score2);

const gamer = [
  {
    name: "Tobi",
    age: 23,
    score: 25,
  },
  {
    name: "Naruto",
    age: 15,
    score: 5,
  },
  {
    name: "Hitachi",
    age: 35,
    score: 55,
  },
];
// On recupere le nom et l'age du premier element du tableau
const [{ name, age }] = gamer;

if (age < 18) {
  console.log("Mineur " + name);
} else if (age > 18 && age < 25) {
  console.log("Majeur " + name);
} else if (age < 50 && age > 25) {
  console.log("Adulte " + name);
} else {
  console.log("Trop vieu " + name);
}
const [tobi, naruto] = gamer;
console.log(tobi, naruto);
