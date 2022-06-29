/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    let newArray = [];

    nums = nums.sort();
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] === 0 && nums[j] === 0 && nums[k] === 0) {
                    newArray.push([nums[i], nums[j], nums[k]]);
                }
                if (nums[i] + nums[j] + nums[k] === 0) {
                    newArray.push([nums[i], nums[j], nums[k]]);

                }
            }
        }
    }
    nums.length = 0;
    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = i + 1; j < newArray.length; j++) {
            if (JSON.stringify(newArray[i]) === JSON.stringify(newArray[j])) {
                if (verifyZeroArray(nums)) {
                    continue;
                } else {
                    newArray.splice(i, 1);
                }
            }

        }

    }
    for (const index in newArray) {
        nums[index] = newArray[index];
    }
    return nums;

};

function verifyZeroArray(myArray) {
    if (Math.min(...myArray) === 0 && Math.max(...myArray) === 0 && myArray.length > 3) {
        return true;
    }
    return false;
}
let nums = [-1, 0, 1];
// let nums = [0, 0, 0, 0];
// let nums = [0, 0, 0];

// let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
console.log(nums);