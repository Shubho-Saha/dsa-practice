function findVal(arr, val) {
    if (!arr.length || val == null) return 'invalid input';

    let left = 0;
    let right = arr.length - 1;


    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] < val) {
            left = middle + 1
        } else if (arr[middle] > val) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(findVal([2, 4, 6, 7, 9, 11, 12, 13, 14, 15, 16, 19, 22, 33, 44, 55, 66], 2));


