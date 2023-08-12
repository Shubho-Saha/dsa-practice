// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters
// that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or
// special characters in both the message and the letters.

// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

function constructNote(message, letters) {
    let msgLookup = {};

    for (let elem of letters) {
        msgLookup[elem] = ++msgLookup[elem] || 1;
    }

    for (let elem of message) {
        if (!(msgLookup[elem])) {
            return false;
        } else {
            msgLookup[elem]--;
        }
    }
    return true;
}

console.log(constructNote('mrinmoy', 'inmnyorm'));
console.log(constructNote('abcc', 'idbac'));