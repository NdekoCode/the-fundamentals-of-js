const myNumber = Math.floor(Math.random()) * 10;
/**
 * Permet de generer un chiffre aléatoire entre  0 et 10
 * @param {Number} max
 * @returns
 */
export function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}
const solution = getRandomInt(10);
/**
 * Permet de verifier si l'utilisateur a entrer une bonne valeur
 * @param {*} n
 * @returns
 */
export function isRight(n) {
  return solution === n;
}
console.log(solution);
export function guess() {
  const userNumber = parseInt(prompt("Entrer un nombre entre 0 et 10"));
  return isRight(userNumber);
}
// On fait 3 essaies
/* for (let i = 0; i < 3; i++) {
  if (guess()) {
    console.log("Bravo, vous avez gagner");
    break;
  } else if (i == 2) {
    console.log("Vous avez perdus");
  }
} */
/**
 * Verifie si un nombre est premier ou non
 * @param {Number} number
 * @returns
 */
export function isPremice(number) {
  if (number < 2) {
    // Ça c'est ce qu'on appel un early return, ça permet d'eviter d'executer du code inutilement dans la fonction
    return false;
  }
  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPremice(0));
console.log(isPremice(1));
console.log(isPremice(2));
console.log(isPremice(3));
console.log(isPremice(4));
console.log(isPremice(5));
console.log(isPremice(6));
console.log(isPremice(7));
console.log(isPremice(8));
console.log(isPremice(9));
console.log(isPremice(10));
