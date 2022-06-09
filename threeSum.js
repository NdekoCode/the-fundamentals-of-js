/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Case for Nums.length < 3
// sort ascendingly [-4,-1,-1,0,1,2]
// Loop through, use 2 pointer to find 2 compelement items
// skip duplicate value in the loop
const threeSum = function (nums) {
    const response = [];
    if (nums.length < 3) {
        return response;
    }


    nums.sort((a, b) => a - b);
    for (let index = 0; index < nums.length; i++) {
        // Etant donné que le tableau est trié si on tombre sur un nombre superieur à zero on arrete la boucle et on retourne le resultat
        if (nums[i] > 0) {
            // On ne peut pas trouver deux nombre à droite qui sont superieur à zero dont en les additionnant on trouve zero
            // Car le tableau est trié de telle sorte que tout nombre à sa droite sera superieur à ce nombre
            break;
        }

        /**ON NE DOIT PAS RENVOYER DES TRIPLET EN DOUBLE 
         * Donc on doit ignorer la valeur en double pour le debut et la fin  
         */
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // On peut commencer nos deux pointer
        // "start" ira de gauche vers la droite et "end" ira de droite vers la gauche
        let start = i + 1,
            end = nums.length - 1;

        // On peux maintenant nous pouvons avoir une boucle while et deplacer ces deux pointers au centre jusqu'à ce qu'ils se rencontrent
        while (start < end) {


            // ON verifie la somme
            let sum = nums[i] + nums[start] + nums[end];
            // Si la somme vaut zero on ajoute le triplet dans "response"
            if (sum === 0) {
                response.push(nums[i], nums[start], nums[end]);
                // On deplace le debut et la fin
                // On passe à l'index suivant du pointeur de debut
                start++;
                // on recule encore sur le dernier pointer
                end--;
                // On Augmente le deplacement de "start" vers la droite TANT QUE la valeur sur le debut "start" est egale à la valeur de son precedent("start - 1")
                while (start < end && nums[start] === nums[start - 1]) {
                    start++;
                }
                //  On Diminue le deplacement de l'indice de fin "end" TANT QUE la valeur sur la fin "end" est egale à la valeur de celui qui le suit("end + 1")
                while (start < end && nums[end] === nums[end + 1]) {
                    end++;
                }
            }
            // Si la somme est inferieur à zero ou superieur à zero nous allons deplacer soit "start" soit "end"

            // Sinon si la somme est inferieur à zero nous allons deplacer "start" et le rendre plus grand
            else if (sum < 0) {
                start++;
            }

            // Sinon si la somme est superieur à zero nous allons deplacer "end" et le rendre plus petit
            else if (sum > 0) {
                end--;
            }
        }
    }
    // A la fin on renvois la reponse
    return response

};