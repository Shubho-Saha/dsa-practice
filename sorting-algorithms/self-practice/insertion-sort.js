function insertionSort(arr) {
    if (arr.length < 2) return arr;

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            else break;
        }
    }
    return arr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];

console.log(insertionSort(nums));
console.log(insertionSort([8, 3, 7, 5, 10, 1, 4]));