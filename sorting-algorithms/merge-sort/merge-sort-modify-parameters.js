function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArr(left , right);
}

function mergeArr(arr1, arr2) {
    let result = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) result.push(arr1.shift());
         else result.push(arr2.shift());
    }

    return [...result, ...arr1, ...arr2]
}

const arr = [5, 2, 10, 3, 4, 1];
console.log(mergeSort(arr));