// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([2, 4, 8, 1, 2, 9], 3));

