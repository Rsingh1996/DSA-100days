// Solve these problems:

// Print all subsequences of array 
const subSequences = (arr) => {
    const print = (i, ds) => {
        if(i >= arr.length){
            console.log(ds);
            return;
        }
        ds.push(arr[i]);
        print(i+1, ds);
        ds.pop(arr[i]);
        print(i+1, ds);
    }
    print(0,[])
}
subSequences([3,1,2])
// Time Complexity: O(2^n) Space Complexity: O(n)


// Print all subsequences of array where sum is k
const printAllSubsequenceWithSumK = (arr , k) => {
    let result = [];
    const print = (i, ds, sum) => {
        if(i >= arr.length){
            if(sum === k) {
                 result.push([...ds]);
            }
            return;
        }
        ds.push(arr[i]);
        print(i+1, ds, sum + arr[i]);
        ds.pop();
        print(i+1, ds, sum);
    }
    print(0,[], 0)
    return result;
}


console.log(printAllSubsequenceWithSumK([3,1,2], 3));
// Time Complexity: O(2^n) Space Complexity: O(n)

// Print any one subsequences of array where sum is k
const printOneSubsequenceWithSum = (arr , k) => {
    const print = (i, ds, sum) => {
        if(i >= arr.length){ // base condition
            if(sum === k){
                console.log(ds);
                return true;
            }
            return false;
        }
        ds.push(arr[i]);
        if(print(i+1, ds, sum+arr[i]) === true){ // take 
            return true;
        }
        ds.pop();
        if(print(i+1, ds, sum) === true){ // not take
            return true;
        }
        return false;
    }
    print(0, [], 0)
}


printOneSubsequenceWithSum([3,1,2], 3);
// Time Complexity: O(2^n) Space Complexity: O(n)

// Print count of all subsequences of array where sum is k
const printCountOfSubsequenceWithSum = (arr , k) => {
    const print = (i, sum) => {
        if(i >= arr.length){ // base condition
            return sum === k ? 1 : 0;
        }
       let left = print(i+1, sum+arr[i])
       let right = print(i+1, sum)
       return (left + right);
    }
    return print(0, 0)
}
console.log(printCountOfSubsequenceWithSum([3,1,2,2,1], 2 ))
// Time Complexity: O(2^n) Space Complexity: O(n)

// 1. Generate all subsets of a set
// Given an array of distinct integers, return all possible subsets (the power set).
// Example:
// Input: [1,2,3]
// Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

const subsets = (arr) => {
  let result = [];
  const backtrack = (start, path) => {
    result.push([...path]);
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return result;
};
console.log(subsets([1, 2, 3]));
// time complexity - O(n2^n), space complexity - O(n)

// 2. Generate all permutations of a string
// Given a string of distinct characters, return all possible permutations of the string.
// Example:
// Input: "abc"
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

const permute = (str) => {
  let result = [];
  const backtrack = (path, used) => {
    if (path.length === str.length) {
      result.push(path.join(""));
      return;
    }
    for (let i = 0; i < str.length; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(str[i]);
        backtrack(path, used);
        path.pop();
        used[i] = false;
      }
    }
  };
  backtrack([], Array(str.length).fill(false));
  return result;
};
console.log(permute("abc"));
// time complexity - O(n!), space complexity - O(n!)

// 3. Rat in a Maze (basic)
// Given a square maze (N x N) with obstacles, find all possible paths for a rat to reach from the top-left cell (0,0) to the bottom-right cell (N-1,N-1). The rat can move only in certain directions (usually down, right, up, left) and cannot visit blocked cells.
// Example:
// Input:

// N = 4
// maze = [[1, 0, 0, 0],
//         [1, 1, 0, 1],
//         [0, 1, 0, 0],
//         [1, 1, 1, 1]]
// Output: All possible paths as strings of directions (e.g., "DRDR", "RRDD", etc.)
