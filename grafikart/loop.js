/**
 * LES BOUCLES
 * - while
 * - for
 * - for of:Recupère les valeur d'un tableau ou les itérable à chaque tour de boucle
 * - for in:Recupère les indice d'un tableau d'un objet ou encore d'un itérable à chaque tour de boucle
 */
/** Exos1: Créer un algorithme qui demande à l'utilisateur un chiffre entre 0 et 10
 *      - Si le chiffre n'est pas entre 0 et 10 on affiche une erreur
 *      - Sinon on affiche tous les chifrres qui sont en dessous de ce chiffre
 */
/* let userNumber = parseInt(prompt("Entrer un chiffre entre 0 et 10"));
if (userNumber > 0 && userNumber <= 10) {
  for (let nb = userNumber; nb >= 0; nb--) {
    console.log(nb);
  }
} else {
  console.error("veuiller entrer un chiffre entre 0 et 10");
} */

/**
 * Exos 2:
 * - Deviner un chiffre
 * - Tant que l'utilisateur n'a pas encore trouver le chiffre, on le lui demande encore
 */
const nbToKnow = 10;
let userNb;
while (userNb !== nbToKnow) {
  userNb = parseInt(prompt("Entrer le chiffre à deviner"));
  console.log(nbToKnow);
}
console.log("Bravo vous avez trouver le nombre", nbToKnow);
