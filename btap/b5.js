function countPositiveIntegers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && Number.isInteger(arr[i])) {
        count++;
      }
    }
    return count === 0 
      ? "không có số nguyên dương trong mảng" 
      : count;
}
  