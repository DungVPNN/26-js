const checkEvent = (arr) => {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] % 2 === 0) {
            console.log(arr[i]);
            flag = true;
        }
    }
    if (!flag) {
        console.log("Mang k co so san");
    }
}
checkEvent("text");
checkEvent([11, 4, 65, 6]);
checkEvent([1, 3, 5, 17]);    
