// Frequency Counter - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements
// in the array whose difference is n. This function should return true
// if the pair exists or false if it does not.

// Solve this with the following requirements:
// Time Complexity - O(n)
// Space Complexity - O(n)

function findPair(arr, num) {
    const obj = {};
  
    for (const item of arr) {
      if (obj[item - num] || obj[item + num]) return true;
      obj[item] = item;
    }
  
    return false;
  }

  console.log(findPair([-2, -4, 6, 3, 2], 6)); // true