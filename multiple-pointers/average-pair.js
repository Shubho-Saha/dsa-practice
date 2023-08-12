// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)
function averagePair(arr, avrg) {
    if (arr.length < 1 || avrg == null) return 'invalid input';

    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex < rightIndex) {
        let tempAv = (arr[leftIndex] + arr[rightIndex]) / 2;
        if (tempAv === avrg) {
            return true;
        } else if (tempAv < avrg) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false


// If the given array is not sorted.
// function averagePair(arr, num) {
//     let obj = {};
//     if(arr.length < 1 || num == null) return false;

//     for (let elem of arr) {
//         if (!(obj[(num*2) - elem])) {
//             obj[elem] = elem;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(averagePair([3,2,5,1,6], 4));
