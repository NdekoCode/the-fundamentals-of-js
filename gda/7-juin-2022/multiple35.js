function multiple_3_5(n) {
    let sum = 0;
    // corps de la fonction ici
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
            sum += i;
        }
    }
    return sum;

}
console.log(multiple_3_5(9));