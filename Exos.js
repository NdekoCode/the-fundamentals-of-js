/**
 *  01.
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

function productSign(n, m) {
    // corps de la fonction ici
    // On verifie si le produit est positif
    if (n * m < 0) {
        return 1;
        // On verifie si le produit est négatif
    } else if (n * m < 0) {
        return -1;
    }
    // On verifie si le produit n'est ni positif ni négatif alors il est egale à zero
    return 0;

}

/**
 * 
 * @param {String} string 
 * @param {number} num 
 * @returns 
 */
function repeatString(string, num) {
    let repeatString = '';
    for (let i = 0; i < num; i++) {
        repeatString += string;
    }
    return repeatString;
}


function multiple_3_5(n) {
    let multiple = [];
    let sum = 0;
    // corps de la fonction ici
    for (let i = 0; i < n; i++) {
        if ((i > 1 && i !== n) && (i % 3 === 0 || i % 5 === 0)) {
            multiple.push(i);
            sum += i;
        }
    }
    return sum;

}

function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        } else if (year % 400 === 0) {
            return true;
        }
    }
    return false;


}