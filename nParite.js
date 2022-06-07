/**
 * 
 * @param {number} n 
 * @param {boolean} parite 
 * @returns number
 */
function nParite(n, parite) {
    // Je declare une variable qui va contenir la somme des elements dont j'ai besoin
    let sum = 0;
    // Je parcours jusqu'à ce que je n'ai plus d'elements
    for (let i = 0; i < n; i++) {
        // On verifie si parité est vrais
        if (parite) {
            // Si parité est VRAIS
            if (i % 2 === 0) { // On verifie si "i" est pair
                console.log(i);
                sum += i; // On ajoute i à la somme
            }
            // Si parité est FAUX
        } else {

            // On verifie si "i" est impaire
            if (i % 2 !== 0) { //I EST IMPAIRE
                console.log(i);
                sum += i; // On ajoute i à la somme
            }

        }
    }
    return sum; // On retourne à la somme
}
console.log(nParite(4, true));