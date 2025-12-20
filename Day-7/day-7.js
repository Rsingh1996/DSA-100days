// Solve these problems:

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
// time complexity - O(n2^n), space complexity - O(2^n)

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
