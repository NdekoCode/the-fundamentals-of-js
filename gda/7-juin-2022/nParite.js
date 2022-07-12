/**
 * 
 * @param {number} n 
 * @param {boolean} parite 
 * @returns number
 */
function nParite(n, parite) {
    if (parite) return n * (n - 1);

    return n * n;
}
console.log(nParite(6, false));
console.log(nParite(6, true));