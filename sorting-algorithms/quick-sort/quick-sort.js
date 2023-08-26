// Quick sort
// Quick sort is an O(n * log(n)) algorithm (Worst case - O(n^2).
// Pivot is always the first element

function pivot(arr, start=0, end=arr.length-1) {
    let pivotVal = arr[start];
    let swapIndex = start;

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotVal) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, swapIndex, start);

    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right)
    }


    return arr;
}

let arr = [4, 2, 8, 1, 7, 9, 3];

console.log(quickSort(arr));

