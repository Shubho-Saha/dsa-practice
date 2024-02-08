// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr, num) {
  let left = 0, right = 0, sum = 0;
  let shortest = Infinity;

  while (right < arr.length) {
    sum += arr[right];

    while (sum >= num) {
      sum -= arr[left];
      left++;
      shortest = Math.min(shortest, (right - left) + 2);
      console.log('right:', right, ' left:', left, ' shortest:', shortest);
      if (shortest === 1)  return shortest;
    }

    right++;
  }

  return shortest === Infinity ? 0 : shortest;

}

console.log(minSubArrayLen([2, 3, 11, 2, 4, 13], 7)); 

