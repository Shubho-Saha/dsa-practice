// Bubble Sort
// Bubble sort is an O(n^2) algorithm.

function bubbleSort(arr) {
    let swap;

    for (let i = 0; i < arr.length; i++) {
        swap = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log(arr[j], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }

        if (!swap) break;
    }

    return arr;
}

console.log(bubbleSort([5, 3, 4, 7, 1]));
// console.log(bubbleSort([0, -10, 7, 4]));
