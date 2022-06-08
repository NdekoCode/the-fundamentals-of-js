const isPalindrome = function (x) {
    let newTable = x.toString().split('').reverse();
    let newValue = newTable.join('');
    if (x.toString() === newValue) {
        return true;
    }
    return false;

};
console.log(isPalindrome(-121));