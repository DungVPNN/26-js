function isStrongPassword(password) {
    if (password.length < 8) {
      return false;
    }
  
    let coChuHoa = false;
    let coChuThuong = false;
    let coSo = false;
  
    for (let i = 0; i < password.length; i++) {
      let kyTu = password[i];
  
      if (kyTu >= 'A' && kyTu <= 'Z') {
        coChuHoa = true;
      } else if (kyTu >= 'a' && kyTu <= 'z') {
        coChuThuong = true;
      } else if (kyTu >= '0' && kyTu <= '9') {
        coSo = true;
      }
  
      if (coChuHoa && coChuThuong && coSo) {
        break;
      }
    }
  
    return coChuHoa && coChuThuong && coSo;
  }
  
  console.log(isStrongPassword("Abc123!@"));
  console.log(isStrongPassword("weakpass"));
  