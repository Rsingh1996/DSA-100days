// Solve these problems:

// 1. Reverse a string
const reverseString = (str) => {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = reversedStr + str[str.length - 1 - i];
  }
  return reversedStr;
};
console.log(reverseString("Rahul")); // Output: 'luhaR'
// time complexity - O(n), space complexity O(n)

// 2. Check if a string is palindrome
const palindrome = (str) => {
  str = str.toLowerCase();
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = reversedStr + str[str.length - 1 - i];
  }
  return reversedStr === str;
};
console.log(palindrome("Anana")); // Output: true
// time complexity - O(n), space complexity O(n)

// 3. Count vowels and consonants in a string
const countVowel = (str) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};
console.log(countVowel("rAhul")); // Output: 2
// time complexity - O(n), space complexity O(1)

// 4. Remove all spaces from a string
const removeSpace = (str) => {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      reversedStr = reversedStr + str[i];
    }
  }
  return reversedStr;
};
console.log(removeSpace("My Name is Rahul")); // Output: 'MyNameisRahul'
// time complexity - O(n), space complexity O(n)
