// Solve these problems:

// Print Name n times using recursion

const printName = (name, n) => {
    console.log(name);
    if(n === 1) return;
    n--;
    return printName(name, n);
}

printName('Rahul', 5)

// timecomplexity - O(n) space complexity - O(n)

// Print numbers 1-> n using recursion

const printNumbers = (n1, n2) => {
    if(n1 > n2) return;
    console.log(n1)
    return printNumbers(n1+1, n2);
}

printNumbers(1, 10)

// timecomplexity - O(n) space complexity - O(n)

// Print numbers n -> 1 using recursion

const printNumbersInDecreasingOrder = (n1, n2) => {
    if(n1 < n2) return;
    console.log(n1)
    return printNumbersInDecreasingOrder(n1-1, n2);
}

printNumbersInDecreasingOrder(10, 1)

// timecomplexity - O(n) space complexity - O(n)


// Print numbers n1 -> n2 using recursion in any order as given

const printNumbersInAnyOrder = (n1, n2) => { 
            console.log(n1);
    if(n1 === n2) return;
    if(n1 < n2) {
        return printNumbersInAnyOrder(n1+1, n2)
    }
    if(n1 > n2) {
        return printNumbersInAnyOrder(n1-1, n2)
    }
}

printNumbersInAnyOrder(1, 4);
printNumbersInAnyOrder(5,2);
// timecomplexity - O(n) space complexity - O(n)

// 1. Factorial of a number using recursion
// Given a number n, write a function to calculate its factorial using recursion.
// Example:
// Input: n = 5
// Output: 120 (since 5! = 5 × 4 × 3 × 2 × 1)

const factorial = (n) => {
  // n! = n*(n-1)
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
// time complexity - O(n), space complexity O(n)

// 2. Sum of first N natural numbers using recursion
// Given a number n, write a function to find the sum of the first n natural numbers using recursion.
// Example:
// Input: n = 5
// Output: 15 (since 1 + 2 + 3 + 4 + 5 = 15)

const recursiveSum = (n) => {
  if (n === 1) return 1;
  return n + recursiveSum(n - 1);
};
console.log(recursiveSum(5));
// time complexity - O(n), space complexity O(n)

// 3. Print Fibonacci series using recursion
// Given a number n, print the first n numbers in the Fibonacci series using recursion.
// Example:
// Input: n = 5
// Output: 0 1 1 2 3
const fibonacci = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
const fibonacciSeries = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(fibonacci(i));
  }
  return result;
};
console.log(fibonacciSeries(5));
// time complexity - O(2^n), space complexity O(n)

// 4. Reverse a string using recursion
// Given a string, write a function to reverse it using recursion.
// Example:
// Input: "hello"
// Output: "olleh"

const recursiveReverse = (str) => {
  if (str.length === 1) return str[0];
  return recursiveReverse(str.substring(1, str.length)) + str[0];
};

console.log(recursiveReverse("hello"));
// time complexity - O(n), space complexity O(n)
