

function isPalindrome(str) {
  const cleaned = str.replace(/[\W_]/g, '').toLowerCase();


  const reversed = cleaned.split('').reverse().join('');

  return cleaned === reversed
};

function isPalindrome2(str) {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join("")
}

console.log(isPalindrome("Racecar"));        // true
console.log(isPalindrome("hello"));          // false
console.log(isPalindrome("A man a plan a canal Panama")); // true


