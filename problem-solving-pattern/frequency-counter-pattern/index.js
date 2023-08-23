// Write a function called same, which accepts two arrays.
//  The function should return true if every value in the array
// has it's corresponding value squared in the second array. The
// frequency of values must be the same.

function same(arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    let frequencyCount1 = {};
    let frequencyCount2 = {};

    for (let elem of arr1) {
        frequencyCount1[elem] = (frequencyCount1[elem] || 0) + 1;
    }

    for (let elem of arr2) {
        frequencyCount2[elem] = (frequencyCount2[elem] || 0) + 1;
    }

    // console.log(frequencyCount1);
    // console.log(frequencyCount2);

    for (let element of arr1) {

        if (!(element ** 2 in frequencyCount2)) {
            return false;
        }
        if (frequencyCount1[element] != frequencyCount2[element ** 2]) {
            return false;
        }
    }
    return true;
}

let arr1 = [3, 2, 4, 5, 3];
let arr2 = [9, 4, 16, 25, 91];
console.log(same(arr1, arr2));