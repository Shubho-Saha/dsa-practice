// Insertion Sort
// Insertion sort is an O(n^2) algorithm.

function insertionSort(arr) {
    
    for (let i=1; i<arr.length; i++) {
        for (let j= i; j>0; j--) {
            if (arr[j] < arr[j-1]) [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            else break;
        }
    }
    return arr;
}

console.log(insertionSort([5, 2, 7, 1, 10, 6]));
// const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(insertionSort(nums));