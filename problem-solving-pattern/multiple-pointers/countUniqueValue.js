// Implement a function called countUniqueValues, which accepts a sorted Array, and counts the unique values in the Array. There can be negative numbers in the Array, but it will always be sorted.

function countUniqueValues(arr) {
    if (!arr.length) return "invalid input";
    let count = 1;

    let i = 1;
    while (i < arr.length) {
        if (!(arr[i] == arr[i - 1])) {
            console.log(arr[i], arr[i - 1]);
            count++;
        }
        i++;
    }
    return count;
}

console.log(countUniqueValues([1, 2, 2, 3, 4, 5, 6, 6]));