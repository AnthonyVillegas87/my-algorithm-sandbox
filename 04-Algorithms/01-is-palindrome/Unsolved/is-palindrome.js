// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

let isPalindrome = function(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for(let i = 0; i < len/2; i ++) {
      if(str[i] !== str[len - 1 - i]) {
          return false
      }
    }
    return true
};
