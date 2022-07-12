const removeElement = function (nums, val) {
    var n = nums.length;

    while (n--) {
        if (nums[n] === val) {
            nums.splice(nums.indexOf(val), 1);
        }
    }
    return nums.length;

};


// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3))
console.log(nums);