// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr, num) {
    let tempLen = 0;
    let sum = 0;

    while (sum < num && tempLen < arr.length) {
        sum += arr[tempLen];
        tempLen++
    }

    if (sum < num) return 0;
    
    let minLen = tempLen;

    console.log('tempLen: ', tempLen, " minLen: ", minLen);
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));

