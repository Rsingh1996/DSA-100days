// Solve these problems:

// 1. Range Sum Query
// Given an array of integers and two indices L and R, write a function to return the sum of elements from index L to index R (inclusive).
// Example:
// Input: arr = [1, 2, 3, 4, 5], L = 1, R = 3
// Output: 9 (because 2 + 3 + 4 = 9)

const rangeSum = (arr, l, r) => {
  let prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] + arr[i]);
  }
  return prefix[r + 1] - prefix[l];
};

console.log(rangeSum([1, 2, 3, 4, 5], 1, 3));

// 2. Equilibrium Point
// Given an array of integers, find an index such that the sum of elements to the left of it is equal to the sum of elements to the right of it. Return the index (0-based) if it exists, otherwise return -1.
// Example:
// Input: arr = [1, 3, 5, 2, 2]
// Output: 2 (because 1 + 3 = 2 + 2)

const equilibriumPoint = (arr) => {
  let prefix = [0];
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    prefix.push(prefix[i] + arr[i]);
  }
  console.log(prefix);
};

equilibriumPoint([1, 3, 5, 2, 2]);

// 2. Sliding Window Problems:
// Maximum Sum Subarray of Size K
// First Negative Integer in Every Window of Size K
