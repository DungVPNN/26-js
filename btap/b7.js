function vietHoaChuCaiDauMoiTu(chuoi) {
    let cacTu = chuoi.split(" ");
    let cacTuDaVietHoa = cacTu.map(function(tu) {
      if (!tu) return "";
      let chuCaiDau = tu[0].toUpperCase();
      let phanConLai = tu.slice(1).toLowerCase();
      return chuCaiDau + phanConLai;
    });
    return cacTuDaVietHoa.join(" ");
  }
  
  console.log(vietHoaChuCaiDauMoiTu("YOU WORLD"));
  console.log(vietHoaChuCaiDauMoiTu("rikkei academy"));
  