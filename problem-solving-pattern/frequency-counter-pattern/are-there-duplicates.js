// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
    if (!args.length) return false;
    console.log(args, args.length);

    let lookUp = {};

    for (let elem of args) {
        if (lookUp[elem]) {
            return true;
        } else {
            lookUp[elem] = 1
        }
    }
    return false;
}

console.log(areThereDuplicates(11, 22, 44, 55, 11));