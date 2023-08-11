// Implement a function called countUniqueValues, which accepts a sorted Array, and counts the unique values in the Array. There can be negative numbers in the Array, but it will always be sorted.

function countUniqueValues(arr) {
    let count=0;

    let i = 0;
    while (i < arr.length) {
        console.log('inside while loop')
        if (!(arr[i] == arr[i+1])) {
            console.log(arr[i], arr[i+1]);
            count++;
        }
        i++;
    }
    
    return count;
    
}

console.log(countUniqueValues([1, 1, 2]));