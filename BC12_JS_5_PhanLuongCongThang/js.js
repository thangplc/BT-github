// -------------------------------------BÀI 1-------------------------------------------------//


function tinhDiemUuTien(_doiTuong, _khuVuc) {
    debugger
    var _diemUuTien = 0;

    switch (_doiTuong) {
        case "0":
            _diemUuTien += 0;
            break;
        case "1":
            _diemUuTien += 2.5;
            break;
        case "2":
            _diemUuTien += 1.5;
            break;
        case "3":
            _diemUuTien += 1;
            break;
    }
    switch (_khuVuc) {
        case "X":
            _diemUuTien += 0;
            break;
        case "A":
            _diemUuTien += 2;
            break;
        case "B":
            _diemUuTien += 1;
            break;
        case "C":
            _diemUuTien += 0.5;
            break;

    }
    return _diemUuTien;
}

function tongDiem(_diemToan, _diemVan, _diemAnh, _doiTuong, _khuVuc) {
    debugger
    var _diemUuTen = tinhDiemUuTien(_doiTuong, _khuVuc);
    return parseFloat(_diemToan) + parseFloat(_diemVan) + parseFloat(_diemAnh) + parseFloat(_diemUuTen);
}

function xetKetQuaTrungTuyen(_diemToan, _diemVan, _diemAnh, _doiTuong, _khuVuc, _diemChuan) {
    debugger
    var _tongDiem = tongDiem(_diemToan, _diemVan, _diemAnh, _doiTuong, _khuVuc);
    var _ketQuaXetTuyen;
    if (_diemAnh == 0 || _diemToan == 0 || _diemVan == 0) {
        _ketQuaXetTuyen = "Kết quả: Không đậu! Cố gắng năm sau!";
    } else {
        _ketQuaXetTuyen = (_tongDiem >= _diemChuan) ? "Đậu" : "Không đậu! Cố gắng năm sau!";
    }
    return _ketQuaXetTuyen;

}

document.getElementById("btnXetTuyen").onclick = function() {
    // DOM đối tượng
    var diemToan = document.getElementById("diemToan").value;
    var diemVan = document.getElementById("diemVan").value;
    var diemAnh = document.getElementById("diemAnh").value;
    var diemChuan = document.getElementById("diemChuan").value;
    var diemDoiTuong = document.getElementById("doiTuong").value;
    var diemKhuVuc = document.getElementById("khuVuc").value;

    debugger
    // alert('chuan');
    var hopLe = true;


    if (diemToan == "" || diemAnh == "" || diemVan == "" || diemChuan == "") {
        hopLe = false;
    } else if (diemToan < 0 || diemAnh < 0 || diemVan < 0 || diemChuan < 0) {
        hopLe = false;
    } else if (diemToan > 10 || diemAnh > 10 || diemVan > 10 || diemChuan > 34.5) {
        hopLe = false;
    } else if (isNaN(diemToan) || isNaN(diemAnh) || isNaN(diemVan)) {
        hopLe = false;
    }
    if (hopLe == true) {
        var kqTongDiem = tongDiem(diemToan, diemVan, diemAnh, diemDoiTuong, diemKhuVuc);
        var ketQuaXetTuyen = xetKetQuaTrungTuyen(diemToan, diemVan, diemAnh, diemDoiTuong, diemKhuVuc, diemChuan);
        document.getElementById("KetQua").style.display = "block";
        document.getElementById("pTongDiem").innerText = "Tổng điểm: " + kqTongDiem;
        document.getElementById("pDiemChuan").innerText = "Điểm chuẩn: " + diemChuan;
        document.getElementById("pKetQuaXetTuyen").innerText = "Kết quả: " + ketQuaXetTuyen;



        console.log("toan: ", diemToan);
        console.log("van:", diemVan);
        console.log("anh van: ", diemAnh);
        console.log("diem chuan: ", diemChuan);
        console.log("khu vuc: ", diemKhuVuc);
        console.log("doi tuong: ", diemDoiTuong);
        console.log("tổng: ", kqTongDiem);
        console.log("uu tien: ", tinhDiemUuTien(diemKhuVuc, diemDoiTuong));
        console.log("KQ: ", ketQuaXetTuyen);

    } else {
        alert('(BÀI 1): Nhập sai! Yêu cầu nhập lại! Điểm các môn thuộc [0, 10]! Điểm chuẩn thuộc [0, 34.5]');

    }
}


// -------------------------------------BÀI 2-------------------------------------------------//
function tinhTienDien(_soKw) {
    debugger
    // _soKw = 1;
    var _tien = 0;
    if (_soKw <= 50 && _soKw >= 0) {
        _tien += _soKw * 500;
    } else if (_soKw > 50 && _soKw <= 100) {
        _tien += 50 * 500 + (_soKw - 50) * 650;
    } else if (_soKw > 100 && _soKw <= 200) {
        _tien += 50 * 500 + 50 * 650 + (_soKw - 100) * 850;
    } else if (_soKw > 200 && _soKw <= 350) {
        _tien += 50 * 500 + 50 * 650 + 100 * 850 + (_soKw - 200) * 1100;
    } else if (_soKw >= 350) {
        _tien += 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (_soKw - 350) * 1300;
    }

    return _tien;
}
document.getElementById("btnTinhTienDien").onclick = function() {
    var soKWDienTieuThu = document.getElementById("txtSoDienTieuThu").value;
    var hoTen = document.getElementById("txtTenKhachHang").value;
    debugger
    console.log(soKWDienTieuThu);
    if (isNaN(soKWDienTieuThu) || soKWDienTieuThu == "" || hoTen == "" || soKWDienTieuThu < 0) {
        alert('(BÀI 2! Nhập sai! Yêu cầu nhập số tiêu thụ điện >= 0)');
    } else {
        var tienDien = tinhTienDien(soKWDienTieuThu).toLocaleString();
        document.getElementById("tienDien").style.display = "block";
        document.getElementById("spanTienDien").innerText = tienDien + " VNĐ";
        document.getElementById("spanTenKhachHang").innerText = hoTen;

        // hiển thị thời gian hiện tại
        var today = new Date();
        var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + "  " + time;
        document.getElementById("spanThoiGian").innerHTML = dateTime;
    }

};