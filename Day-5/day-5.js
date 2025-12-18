// 1. Remove duplicates from a string
// Given a string, remove all duplicate characters and return the resulting string with only the first occurrence of each character preserved.
// Example:
// Input: "programming"
// Output: "progamin"

const removeDuplicateChar = (str) => {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (!newstr.includes(str[i])) {
      newstr = newstr + str[i];
    }
  }
  return newstr;
};

console.log(removeDuplicateChar("programming"));
// time complexity - O(n*m), space complexity O(m)

// 2. Find first non-repeating character
// Given a string, find and return the first character that does not repeat anywhere in the string. If all characters repeat, return a special value (e.g., -1).
// Example:
// Input: "leetcode"
// Output: "l"

const findNonRepeatingchar = (str) => {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]] = (counts[str[i]] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]] === 1) {
      return str[i];
    }
  }
  return -1;
};
console.log(findNonRepeatingchar("leetcode"));
// time complexity - O(n), space complexity O(m)

// 3. Check if two strings are anagrams
// Given two strings, determine if they are anagrams of each other (i.e., they contain the same characters in any order, with the same frequency).
// Example:
// Input: "listen", "silent"
// Output: true

// 4. Pattern matching (Naive)
// Given a text string and a pattern string, check if the pattern exists in the text using the naive pattern matching approach. Return the starting index of each occurrence.
// Example:
// Input: text = "AABAACAADAABAABA", pattern = "AABA"
// Output: [0, 9, 12]
