let tiepTuc = true;
let danhSachSanPham = [];
let gioHang = [];

while (tiepTuc) {
  let luaChon = Number(prompt(`1: Xem danh sách sản phẩm có sẵn
2: Mua sản phẩm
3: Xem giỏ hàng
4: Xem hóa đơn
5: Thoát
0: Nhập thêm sản phẩm vào kho`));

  switch (luaChon) {
    case 0:
      nhapSanPham(danhSachSanPham);
      break;
    case 1:
      xemDanhSach(danhSachSanPham);
      break;
    case 2:
      muaSanPham(danhSachSanPham);
      break;
    case 3:
      xemDanhSach(gioHang);
      break;
    case 4:
      inHoaDon(gioHang);
      break;
    case 5:
      tiepTuc = false;
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
      break;
  }
}

/* ----------------------- HÀM PHỤ ----------------------- */
function chiTietThongTin(index) {
  switch (index) {
    case 0:
      return prompt("Tên sản phẩm:");
    case 1:
      return Number(prompt("Số lượng sản phẩm:"));
    case 2:
      return Number(prompt("Giá sản phẩm:"));
    default:
      return null;
  }
}

// Kiểm tra sản phẩm có tồn tại trong mảng không, trả về vị trí (index)
function timViTri(mang, tenSanPham) {
  for (let i = 0; i < mang.length; i++) {
    if (mang[i][0] === tenSanPham) {
      return i;
    }
  }
  return -1;
}

/* 1) Thêm sản phẩm vào kho */
function nhapSanPham(kho) {
  let thongTin = [];
  for (let i = 0; i < 3; i++) {
    thongTin[i] = chiTietThongTin(i); 
  }
  let viTri = timViTri(kho, thongTin[0]);
  if (viTri !== -1) {
    // Nếu đã có trong kho, chỉ cộng dồn số lượng
    kho[viTri][1] += thongTin[1];
  } else {
    kho.push(thongTin);
  }
}

/* 2) Xem danh sách sản phẩm (kho hoặc giỏ hàng) */
function xemDanhSach(mang) {
  let output = "";
  for (let i = 0; i < mang.length; i++) {
    output += `${mang[i][0]} - SL: ${mang[i][1]} - Giá: ${mang[i][2]}\n`;
  }
  alert(output || "Không có sản phẩm nào!");
}

/* 3) Mua sản phẩm */
function muaSanPham(kho) {
  let tenCanMua = prompt("Nhập tên sản phẩm muốn mua:");
  let indexKho = timViTri(kho, tenCanMua);
  if (indexKho !== -1) {
    let soLuongMua = Number(prompt("Số lượng cần mua:"));
    while (soLuongMua > kho[indexKho][1]) {
      soLuongMua = Number(prompt("Kho không đủ hàng, vui lòng nhập lại số lượng:"));
    }
    // Cập nhật lại số lượng trong kho
    kho[indexKho][1] -= soLuongMua;

    // Kiểm tra xem giỏ hàng đã có sản phẩm này hay chưa
    let indexGioHang = timViTri(gioHang, tenCanMua);
    if (indexGioHang !== -1) {
      gioHang[indexGioHang][1] += soLuongMua;
    } else {
      gioHang.push([tenCanMua, soLuongMua, kho[indexKho][2]]);
    }
    alert("Đã thêm vào giỏ hàng!");
  } else {
    alert("Không tìm thấy sản phẩm trong kho!");
  }
}

/* 4) In hóa đơn */
function inHoaDon(gioHang) {
  let output = "";
  let tongTien = 0;
  for (let i = 0; i < gioHang.length; i++) {
    let ten = gioHang[i][0];
    let sl = gioHang[i][1];
    let gia = gioHang[i][2];
    output += `${ten} - SL: ${sl} - Giá: ${gia}\n`;
    // Tính tiền theo số lượng * đơn giá
    tongTien += sl * gia;
  }
  output += `\nTổng hóa đơn: ${tongTien}`;
  alert(output || "Giỏ hàng trống! Vui lòng mua sản phẩm.");
}
