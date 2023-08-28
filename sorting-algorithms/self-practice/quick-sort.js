function pivot(arr, start = 0, end = arr.length - 1) {

    let swapIndex = start;
    let pivotVal = arr[start];

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotVal) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    if (swapIndex !== start) swap(arr, start, swapIndex);

    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length < 2) return arr;
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums));
console.log(quickSort([6, 3, 10, 15, 2, 4, 1, 8]));