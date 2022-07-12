function repeatString(string, num) {
    let repeatString = '';
    for (let i = 0; i < num; i++) {
        repeatString += string;
    }
    return repeatString;
}
console.log(repeatString('a', 5));