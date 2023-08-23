// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {
    num1 = `${num1}`;
    num2 = `${num2}`;

    if (num1.length !== num2.length) return 'false'

    let frequencyCount1 = {};

    for (let digits of num1) {
        frequencyCount1[digits] = (frequencyCount1[digits] || 0) + 1
    }

    for (let digits of num2) {
        if (!(frequencyCount1[digits])) {
            return false;
        } else {
            frequencyCount1[digits]--;
        }
    }
    return true;

}

console.log(sameFrequency(2111, 1212)); // false;
console.log(sameFrequency(4331, 1433)); //true;

