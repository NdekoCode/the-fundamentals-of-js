const twoSum = function (numbers, target) {
    const n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([8, 5, 2, 4, 0, 9], 12));
console.log(twoSum([12, 5, 2, 4, 0, 9], 13));
console.log(twoSum([12, 5, 2, 4, 0, 9], 7));