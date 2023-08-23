// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
    if (arr.length < num) return false;

    let maxSum = 0;
    for (let i=0; i<num; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    console.log('maxsum:', maxSum, " tempSum: ", tempSum);

    for(let j= num; j<arr.length; j++) {
        tempSum = tempSum + arr[j] - arr[j-num];

        maxSum = Math.max(tempSum, maxSum);
        console.log('tempSum: ', tempSum, 'maxSum: ', maxSum);

    }
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 500, 300, 200, 900, 100,], 3));