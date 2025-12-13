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
// time complexity - O(n), space complexity O(n)

// 2. Equilibrium Point
// Given an array of integers, find an index such that the sum of elements to the left of it is equal to the sum of elements to the right of it. Return the index (0-based) if it exists, otherwise return -1.
// Example:
// Input: arr = [1, 1, 2, 5, 2, 2]
// Output: 2 (because 1 + 1 + 1 = 2 + 2)

const equilibriumPoint = (arr) => {
  let sum = 0;
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    sum += arr[i];
  }
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arrayLength; i++) {
    rightSum = sum - leftSum - arr[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
};

console.log(equilibriumPoint([1, 1, 2, 5, 2, 2]));
// time complexity - O(n), space complexity O(1)

// 3. Maximum Sum Subarray of Size K
// Given an array of integers and a number K, find the maximum sum of any contiguous subarray of size K.
// Example:
// Input: arr = [2, 1, 5, 1, 3, 2], K = 3
// Output: 9 (because 5 + 1 + 3 = 9)
// 8, 7, 9, 6

const maximumOfSubArray = (arr, k) => {
  let windowSum = 0;
  let maximumSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maximumSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; //
    if (maximumSum < windowSum) {
      maximumSum = windowSum;
    }
  }
  return maximumSum;
};

console.log(maximumOfSubArray([2, 1, 5, 1, 3, 2], 3));
// time complexity - O(n), space complexity O(1)

// 4. First Negative Integer in Every Window of Size K
// Given an array of integers and a number K, for every contiguous subarray/window of size K, print the first negative integer in that window. If there is no negative integer, print 0.
// Example:
// Input: arr = [12, -1, -7, 8, 15, 30, 16, 28], K = 3
// Output: -1 -1 -7 0 0 0

const firstNegativeIntOfSubArray = (arr, k) => {
  const negativeIndices = [];
  const output = [];
  for (let i = 0; i < k; i++) {
    if (arr[i] < 0) {
      negativeIndices.push(i);
    }
  }
  output.push(negativeIndices.length ? arr[negativeIndices[0]] : 0);
  for (let i = k; i < arr.length; i++) {
    if (arr[i - k] < 0) {
      negativeIndices.shift();
    }
    if (arr[i] < 0) {
      negativeIndices.push(i);
    }
    output.push(negativeIndices.length ? arr[negativeIndices[0]] : 0);
  }
  return output;
};

console.log(firstNegativeIntOfSubArray([12, -1, -7, 8, 15, 30, 16, 28], 3));
// time complexity - O(n), space complexity O(n)
