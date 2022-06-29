function matriceCaree(A) {
    let diagSum = 0;
    let inverseDiagSum = 0;
    for (let index = 0; index < A.length; index++) {
        diagSum += A[index][index];
        inverseDiagSum += A[index][A.length - 1 - index];
    }
    return Math.abs(diagSum - inverseDiagSum);
}
console.log(matriceCaree([
    [2, 2],
    [7, 11]
]));