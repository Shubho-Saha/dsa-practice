// naive string search
// Write a function which accepts a string and a pattern,
// and counts the number of times the pattern appears in the string.

// Time Complexity - O(n * m)

// My Solution

function stringSearch(str, val) {

    if (!str.length || !val.length) return 0;

    let count = 0;

    for (let i=0; i < str.length; i++) {
        for(let j=0; j<val.length; j++) {
            if (str[i] !== val[j]) {
                count--;
                break;
            } else i++;
            
        }
        count++;
        console.log('i: ', i, 'count: ', count);
    }
    return count;
}

let str = 'womgwomgsljdaomgalkjdflomgadlkfj'
let val = 'omg';

console.log(stringSearch(str, val));