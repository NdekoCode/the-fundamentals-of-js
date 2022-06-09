function binarySearch(arr, value, lowIndex, highIndex) {
    if (lowIndex > highIndex) {
        return -(lowIndex + 1);
    }

    let midIndex = lowIndex + Math.trunc((highIndex - lowIndex) / 2);
    if (value == arr[midIndex]) {
        return midIndex;
    }
    if (value > arr[midIndex]) {
        return binarySearch(arr, value, lowIndex, midIndex - 1);
    }
    return binarySearch(arr, value, midIndex + 1, highIndex);
}