const checkPrime = (input) => {
    if (typeof input !== 'number' || !Number.isInteger(input) || input <= 0) {
      return "dữ liệu không hợp lệ";
    }
    if (input < 2) {
      return "không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        return "không phải là số nguyên tố";
      }
    }
    return "là số nguyên tố";
  };
  
  console.log(checkPrime(17));
  console.log(checkPrime(6));      
  console.log(checkPrime("text")); 
  