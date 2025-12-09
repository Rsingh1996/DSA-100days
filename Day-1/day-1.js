// Write simple programs and analyze complexity
// -> Sum of first N numbers

const sumOfFirstNNumbers = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sumOfFirstNNumbers(10));
// time complexity - O(1) space complexity - O(1)

// -> Linear Search in an Array

const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

console.log(linearSearch([10, 22, 3, 14, 59, 26, 37], 37));
console.log(linearSearch([10, 22, 3, 14, 59, 26, 37], 7));
// time complexity - O(n) space complexity - O(1)

// -> Binary Search in sorted array

const binarySearch = (arr, item) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + right) / 2;
    if (arr[mid] < item) {
      left = mid + 1;
    } else if (arr[mid] > item) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(binarySearch([2, 4, 5, 8, 13, 18, 24], 8));
console.log(binarySearch([2, 4, 5, 8, 13, 18, 24], 38));
// time complexity - O(logn) space complexity - O(1)
