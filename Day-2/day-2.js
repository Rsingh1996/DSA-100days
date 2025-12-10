// Solve these problems:

// Find the largest element in an array
const largestElement = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(largestElement([2, 4, 7, 12, 4, 9, 24, 32, 3, 6])); // Output: 32

// time complexity - O(n), space complexity O(1)

// Reverse an array
const reverse = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let a = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - i - 1] = a;
  }
  return arr;
};

console.log(reverse([2, 4, 7, 12, 4, 9, 24, 32, 3, 6, 38]));
// Output: [38, 6, 3, 32, 24, 9, 4, 12, 7, 4, 2]

// time complexity - O(n), space complexity O(1)

// Find the sum of array elements
const sumOfArray = (arr) => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
};
console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15

// time complexity - O(n), space complexity O(1)

// Check if array is sorted
const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([1, 2, 7, 4, 5])); // Output: false

// time complexity - O(n), space complexity O(1)
