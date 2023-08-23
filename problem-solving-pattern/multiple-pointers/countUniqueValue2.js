// Implement a function called countUniqueValues, which accepts a sorted Array, and counts the unique values in the Array. There can be negative numbers in the Array, but it will always be sorted.

function countUniqueValues(arr) {
    if (arr.length < 1) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues([]));