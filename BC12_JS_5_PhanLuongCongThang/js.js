// -------------------------------------BÀI 1-------------------------------------------------//


function getDiemUuTien(_khuVuc, _doiTuong) {
    var _diemUuTien = 0;
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
    switch (_doiTuong) {
        case "0":
            _diemUuTien += 0;
            break;
        case "1":
            _diemUuTien += 2.5;
            break;
        case "B2":
            _diemUuTien += 1.5;
            break;
        case "3":
            _diemUuTien += 1;
            break;
    }
    return _diemUuTien;
}

function Sum(a, b, c, d, e) {
    return Number(a) + Number(b) + Number(c) + getDiemUuTien(d, e);
}

function B1Result(_diemChuan, _diemToan, _diemVan, _diemAnh, _khuVuc, _doiTuong) {
    var _sum = Sum(_diemToan, _diemVan, _diemAnh, _khuVuc, _doiTuong);
    var _text;
    if (_diemAnh == 0 || _diemToan == 0 || _diemVan == 0) {
        _text = "Kết quả: Không đậu! Cố gắng năm sau!";
    } else {
        _text = (_sum >= _diemChuan) ? "Đậu" : "Không đậu! Cố gắng năm sau!";
    }
    return _text;

}

document.getElementById("b1-btn").onclick = function() {
    // DOM đối tượng
    var diemToan = document.getElementById("toan").value;
    var diemVan = document.getElementById("nguVan").value;
    var diemAnhVan = document.getElementById("anhVan").value;
    var diemChuan = document.getElementById("diemChuan").value;
    var selectKhuVuc = document.getElementById("khuVuc").value;
    var selectDoiTuong = document.getElementById("doiTuong").value;

    debugger
    // alert('chuan');
    var hopLe = true;


    if (diemToan == "" || diemAnhVan == "" || diemVan == "" || diemChuan == "") {
        hopLe = false;
    } else if (diemToan < 0 || diemAnhVan < 0 || diemVan < 0 || diemChuan < 0) {
        hopLe = false;
    } else if (diemToan > 10 || diemAnhVan > 10 || diemVan > 10 || diemChuan > 34.5) {
        hopLe = false;
    } else if (isNaN(diemToan) || isNaN(diemToan) || isNaN(diemToan)) {
        hopLe = false;
    }
    if (hopLe == true) {
        document.getElementById("b1-showResult").style.display = "block";
        document.getElementById("b1-sumMark").innerText = "Tổng điểm: " + Sum(diemToan, diemVan, diemAnhVan, selectKhuVuc, selectDoiTuong);
        document.getElementById("b1-benchmark").innerText = "Điểm chuẩn: " + diemChuan;
        document.getElementById("b1-result").innerText = "Kết quả: " + B1Result(diemChuan, diemToan, diemVan, diemAnhVan, selectKhuVuc, selectDoiTuong);
        console.log("toan: ", diemToan);
        console.log("van:", diemVan);
        console.log("anh van: ", diemAnhVan);
        console.log("diem chuan: ", (diemChuan));
        console.log("khu vuc: ", selectKhuVuc);
        console.log("doi tuong: ", selectDoiTuong);
        console.log("tổng: ", Sum(diemToan, diemVan, diemAnhVan, selectKhuVuc, selectDoiTuong));
        console.log("uu tien: ", getDiemUuTien(selectKhuVuc, selectDoiTuong));


    } else {
        alert('(BÀI 1): Nhập sai! Yêu cầu nhập lại! Điểm các môn thuộc [0, 10]! Điểm chuẩn thuộc [0, 34.5]');

    }
}


// -------------------------------------BÀI 2-------------------------------------------------//
function tinhTienDien(_soKw) {
    debugger
    // _soKw = 1;
    var _tien = 0;
    if (_soKw <= 50) {
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
document.getElementById("b2-btn").onclick = function() {
    var soKW = document.getElementById("b2-kw").value;
    var hoTen = document.getElementById("b2-name").value;
    debugger
    console.log(soKW);
    if (isNaN(soKW) || soKW == "" || hoTen == "" || soKW < 0) {
        alert('(BÀI 2! Nhập sai! Yêu cầu nhập số >= 0)');
    } else {
        var tien = tinhTienDien(soKW);
        document.getElementById("b2-showResult").style.display = "block";
        document.getElementById("b2-money").innerText = "Tiền điện: " + tien + " VND";

    }
}