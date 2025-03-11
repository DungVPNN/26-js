let users = [];
const checkEmail=(email)=>{
    if (!email.includes('@') || (!email.endsWith('.com') && !email.endsWith('.vn'))) {
        return "Email không hợp lệ!";
    }
    if(users.includes(email)){
        return"Tai khoan ton tai roi";
    }
    users.push(email);
    return"Dang ki thanh cong"
}
console.log(checkEmail("test@example.com")); 
console.log(checkEmail("test@example.com"));
console.log(checkEmail("invalidemail")); 
console.log(checkEmail("user@domain.vn"));
console.log(users);

