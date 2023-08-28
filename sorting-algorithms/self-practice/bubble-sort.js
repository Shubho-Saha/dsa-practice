function bubbleSort(arr) {
    if (arr.length < 2) return arr;

    let swap;

    for (let i = arr.length - 1; i >= 0; i--) {
        swap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!swap) break;
    }
    return arr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];

console.log(bubbleSort([5, 2, -7, 1, -10]));
console.log(bubbleSort(nums));