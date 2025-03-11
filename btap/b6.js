function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
      return "là chuỗi đối xứng";
    } else {
      return "không phải chuỗi đối xứng";
    }
  }
  
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("aloloa"));
  console.log(isPalindrome("12345"));
  