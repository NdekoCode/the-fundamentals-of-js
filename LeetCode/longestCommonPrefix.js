const longestCommonPrefix = function (strs) {
    // Je recupere le plus petit des chaines qui se trouvent dans le tableau "strs"
    // Car c'est à partir de luis que l'on va faire les extractions
    let CommonPrefix = strs.reduce((firstValue, nextValue) => nextValue.length < firstValue.length ? nextValue : firstValue);
    for (let str of strs) {
        // Tant que la portion de "str"  de 0 à la taille de "CommonPrefix" est different de "CommonPrefix"
        while (str.slice(0, CommonPrefix.length) !== CommonPrefix) {
            // On enleve la derniere lettre de commonPrefix et on retourne ce qui va rester
            CommonPrefix = CommonPrefix.slice(0, -1);
        }
    }
    return CommonPrefix;
}

strs = ["dog", "racecar", "car"];
// strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));