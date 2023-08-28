function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / 10**pos) % 10;
}

function digitCount(num) {
    return Math.abs(num).toString().length;
}

function getMaxDigit(arr) {
    let maxDigit = 0;

    for (let num of arr) {
        maxDigit = Math.max(maxDigit, digitCount(num))
    }
    return maxDigit;
}

function radixSort(arr) {
    let maxDigitCount = getMaxDigit(arr);
 
    for (let i=0; i<maxDigitCount; i++) {
        let arrBucket = Array.from({length:10}, ()=> []);
        for (let num of arr) {
            let digitIndex = getDigit(num, i);
            arrBucket[digitIndex].push(num);
        }

        arr = [].concat(...arrBucket);
    }

    return arr;
}

console.log(radixSort([6, 3, 10, 15, 1, 4, 8, 3]));