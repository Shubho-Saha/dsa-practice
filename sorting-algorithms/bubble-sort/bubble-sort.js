// Bubble Sort
// Bubble sort is an O(n^2) algorithm.

//My Solution
function bubbleSort(arr) {

    let swap;

    for (let i = arr.length - 1; i >= 0; i--) {
        swap = false;
        for (let j = 0; j < i; j++) {
            console.log(arr[j], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }

        if (!swap) break;
    }

    return arr;
};

console.log(bubbleSort([5, 3, 4, 7, 1]));
// console.log(bubbleSort([0, -10, 7, 4]));