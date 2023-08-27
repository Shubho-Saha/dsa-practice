// function to get the nTH  digit of a given number
function getDigits(num, pos) {
    let digit = Math.floor(Math.abs(num) / 10 ** pos) % 10;
    return digit;
}

// function to count the length of a number or how many digits are there.
function digitCount(num) {
    return Math.abs(num).toString().length;
}

// function to get the length of the largest number in an array.
function getMaxDigits(numArr) {
    let maxDigits = 0;

    for (let num of numArr) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }

    return maxDigits;
}

function radixSort(arr) {
    const end = getMaxDigits(arr);

    for (let i=0; i < end; i++) {
        const helperArr = Array.from({length: 10}, ()=> []);

        for (let num of arr) {
            let digit = getDigits(num, i);
            helperArr[digit].push(num);
        }
        arr = [].concat(...helperArr);
    }

    return arr;
}

console.log(radixSort([304, 15, 102, 4, 305]));
