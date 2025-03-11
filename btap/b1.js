const timPhanTuNhoNhat=(arr) => {
    if (!Array.isArray(arr)) {
      return "giá trị không hợp lệ";
    }
    if (arr.length === 0) {
      return "mảng không chứa phần tử";
    }
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
      }
    }
    return `phần tử nhỏ nhất trong mảng là ${minValue}`;
  }
  
  console.log(timPhanTuNhoNhat([2, 4, 8, 1, 9]));
  console.log(timPhanTuNhoNhat([]));
  console.log(timPhanTuNhoNhat("abc"));
  console.log(timPhanTuNhoNhat([5, 2, 7, 5, 4]));

  