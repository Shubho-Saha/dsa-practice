// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback) {
    return callback(arr);

}

function callback(arr) {
    if (!arr.length) return false;

    if (arr[0] % 2 !== 0) return true;
    return callback(arr.slice(1));
}

console.log(someRecursive([2, 6, 4, 7], callback));


// function someRecursive(arr, cb) {
//     if (!arr.length) return false;
  
//     if (!cb(arr[0])) return someRecursive(arr.slice(1), cb);
  
//     return true;
//   }