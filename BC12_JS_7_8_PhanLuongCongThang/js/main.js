"use strict";

function queSel(selector) {
    return document.querySelector(selector);
}


// Mảng số nguyên
var tblDSSoNguyen = queSel("#tblDSSoNguyen");
var dSachSo = new Array();






// Kiểm tra danh sách rỗng
function kiemTraDSRong(danhSach) {
    if (danhSach.length === 0) {
        return true;
    }
    return false;
}


// Thêm mới số nguyên và hiển thị trên table
var themMoiSoNguyen = function() {
    var soNguyen = Number(queSel("#txtSoNguyen").value);
    if (isNaN(soNguyen) || !Number.isInteger(soNguyen) || soNguyen == '') {
        alert("Nhập giá trị là số nguyên");
    } else {
        // kích thước hàng table số nguyên
        var sizeTable = tblDSSoNguyen.rows.length;
        var index = sizeTable - 1;
        var newRow = tblDSSoNguyen.insertRow(sizeTable);
        var cellIndex = newRow.insertCell(0);
        var cellValue = newRow.insertCell(1);
        cellValue.innerHTML = soNguyen;
        cellIndex.innerHTML = index++;
        dSachSo.push(soNguyen);
    }

}


// Tính tổng số dương
function tinhTongSoDuong() {
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var i = 0;
        var tongSoDuong = 0;
        while (i < dSachSo.length) {
            if (dSachSo[i] > 0) {
                tongSoDuong += dSachSo[i];
            }
            i++;
        }
        queSel("#titleKetQua").innerHTML = "Tổng số dương"
        queSel("#spanKetQua").innerHTML = tongSoDuong;

    }

}


// Đếm số dương
function demSoDuong() {
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var i = 0;
        var dem = 0;
        while (i < dSachSo.length) {
            if (dSachSo[i] > 0) {
                dem++;
            }
            i++;
        }
        queSel("#titleKetQua").innerHTML = "Số lượng số dương"
        queSel("#spanKetQua").innerHTML = dem;

    }

}

// Tìm số nhỏ nhất
function timSoNhoNhat() {
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Dane sách rỗng!"
    } else {
        var soNhoNhat = dSachSo[0];
        var i = 0;
        var iSoNhoNhat = 0;
        while (i < dSachSo.length) {
            if (dSachSo[i] < soNhoNhat) {
                soNhoNhat = dSachSo[i];
                iSoNhoNhat = i;
            }
            i++;
        }
        queSel("#titleKetQua").innerHTML = "Số nhỏ nhất"
        queSel("#spanKetQua").innerHTML = "Index:" + iSoNhoNhat + "; Value: " + soNhoNhat;

    }

}


// Tìm số dương nhỏ nhất 
function timSoDuongNhoNhat() {
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var soDuongNhoNhat = dSachSo[0];
        console.log(soDuongNhoNhat);
        var i = 0;
        var iSoDuongNhoNhat = 0;
        while (i < dSachSo.length) {
            if ((dSachSo[i] < soDuongNhoNhat) && (dSachSo[i] > 0)) {
                soDuongNhoNhat = dSachSo[i];
                iSoDuongNhoNhat = i;
            }
            i++;
        }
        queSel("#titleKetQua").innerHTML = "Số dương nhỏ nhất"
        queSel("#spanKetQua").innerHTML = "Index:" + iSoDuongNhoNhat + "; Value: " + soDuongNhoNhat;

    }

}

// Tìm chẵn cuối cùng, nếu k có chẵn return -1
function timChanCuoiCung() {
    debugger
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var soChanCuoiCung;
        var i = 0;
        var iSoChanCuoiCung;
        var demSoChan = 0;
        while (i < dSachSo.length) {
            if (dSachSo[i] % 2 === 0) {
                soChanCuoiCung = dSachSo[i];
                iSoChanCuoiCung = i;
                demSoChan++;
            }
            i++;
        }
        if (demSoChan === 0) {
            queSel("#titleKetQua").innerHTML = "Số chẵn cuối cùng"
            queSel("#spanKetQua").innerHTML = "-1(Không có số chẵn)";

        } else {
            queSel("#titleKetQua").innerHTML = "Số chẵn cuối cùng"
            queSel("#spanKetQua").innerHTML = "Index:" + iSoChanCuoiCung + "; Value: " + soChanCuoiCung;
        }

    }

}
// Hoan doi 2 vi tri 


function hoanVi2ViTri() {
    var viTri1 = Number(queSel("#txtViTri1").value);
    var viTri2 = Number(queSel("#txtViTri2").value);
    console.log(dSachSo);

    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        if (isNaN(viTri1) || isNaN(viTri2) || viTri1 > dSachSo.length - 1 || viTri2 > dSachSo.length - 1 || viTri1 < 0 || viTri2 < 0) {
            alert("Nhập vị trí không hợp lệ");
        } else {
            var temp = dSachSo[viTri1];
            dSachSo[viTri1] = dSachSo[viTri2];
            dSachSo[viTri2] = temp;
            queSel("#titleKetQua").innerHTML = "Mảng sau khi hoán vị"
            queSel("#spanKetQua").innerHTML = dSachSo;
            console.log(dSachSo);
        }

    }


}


// Sắp xếp tăng dần
function sapXepTangDan() {
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"

    } else {
        var ketQua = dSachSo.sort(function(a, b) { return a - b; });
        queSel("#titleKetQua").innerHTML = "Mảng tăng dần"
        queSel("#spanKetQua").innerHTML = ketQua;
    }
}

// Số nguyên tố đầu tiên
function kiemTraSNT(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;

        }
    }
    return true;
}

function timSoNTDauTien() {
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"

    } else {
        var soNTDauTien;
        var iSoNTDauTien;
        var soLuongSNT = 0;
        for (var i = 0; i < dSachSo.length; i++) {
            // Kiểm tra số lương só nguyên tố
            if (kiemTraSNT(dSachSo[i])) {
                soLuongSNT++;
            }
            for (var j = 0; j < dSachSo.length; j++) {
                if (kiemTraSNT(dSachSo[j])) {
                    soNTDauTien = dSachSo[j];
                    iSoNTDauTien = j;
                    break;
                }

            }
        }
        if (soLuongSNT !== 0) {
            queSel("#titleKetQua").innerHTML = "Số nguyên tố đầu tiên"
            queSel("#spanKetQua").innerHTML = soNTDauTien;
        } else {
            queSel("#titleKetQua").innerHTML = "Số nguyên tố đầu tiên"
            queSel("#spanKetQua").innerHTML = "-1 (Không có số nguyên tố)";

        }
    }
}

// So sánh số lương âm dương
function soSanhSLAmDuong() {
    var slSoAm = 0;
    var slSoDuong = 0;
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"

    } else {
        for (var i = 0; i < dSachSo.length; i++) {
            if (dSachSo[i] > 0) {
                slSoDuong++;
            }
            if (dSachSo[i] < 0) {
                slSoAm++;
            }
        }


        var ketQua = slSoAm === slSoDuong ? "SL âm(" + slSoAm + ")" + " = SL dương(" + slSoDuong + ")" : slSoAm > slSoDuong ? "SL âm(" + slSoAm + ")" + " > SL dương(" + slSoDuong + ")" : "SL âm(" + slSoAm + ")" + " < SL dương(" + slSoDuong + ")";
        queSel("#titleKetQua").innerHTML = "So sánh sl âm dương"
        queSel("#spanKetQua").innerHTML = ketQua;


    }

}

// Thêm mới số thực

function themMoiSoThuc() {
    var soThuc = Number(queSel("#txtSoThuc").value);

    if ((isNaN(soThuc) || soThuc === "")) {
        alert("Nhập giá trị là số thực");
    } else {
        // kích thước hàng table số nguyên
        var sizeTable = tblDSSoNguyen.rows.length;
        var index = sizeTable - 1;
        var newRow = tblDSSoNguyen.insertRow(sizeTable);
        var cellIndex = newRow.insertCell(0);
        var cellValue = newRow.insertCell(1);
        cellValue.innerHTML = soThuc;
        cellIndex.innerHTML = index++;
        dSachSo.push(soThuc);
    }
    console.log(dSachSo);

}

function ktsn(n) {
    if (Number.isInteger(n)) {
        console.log("so nguyen")
    } else {
        console.log("k phai so nguyen")

    }
}
// ktsn(4); // true
// ktsn(-4); // true
// ktsn(0); //true
// ktsn(4.1); //false
// ktsn(-4.5); //false
// Đếm số nguyên trong mảng mới nhập (thực+ nguyên)
function demSoNguyen() {
    if (kiemTraDSRong(dSachSo)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var i = 0;
        var sLSoNguyen = 0;
        while (i < dSachSo.length) {
            if (Number.isInteger(dSachSo[i])) {
                sLSoNguyen++;
                console.log(dSachSo[i]);
            }
            i++;
        }
        if (sLSoNguyen !== 0) {
            queSel("#titleKetQua").innerHTML = "Số lương số nguyên"
            queSel("#spanKetQua").innerHTML = sLSoNguyen;
        } else {
            queSel("#titleKetQua").innerHTML = "Số lương số nguyên"
            queSel("#spanKetQua").innerHTML = "-1(Không có số nguyên)";
        }

    }
}


// Lựa chon thao tác
function thucHienThaoTac() {
    var thaoTac = queSel("#thaoTac").value;
    // alert(thaoTac);
    switch (thaoTac) {
        case "1":
            {
                tinhTongSoDuong();
                break;
            }
        case "2":
            {
                demSoDuong();
                break;
            }
        case "3":
            {
                timSoNhoNhat();
                break;
            }
        case "4":
            {
                timSoDuongNhoNhat();
                break;
            }
        case "5":
            {
                timChanCuoiCung();
                break;
            }
        case "7":
            {
                sapXepTangDan();
                break;
            }
        case "8":
            {
                timSoNTDauTien();
                break;
            }
        case "9":
            {
                demSoNguyen();
                break;
            }
        case "10":
            {
                soSanhSLAmDuong();
                break;
            }
        default:
            {
                queSel("#spanKetQua").innerHTML = "Vui lòng chọn thao tác!"
                break;
            }

    }
}

// var a = new Array();
// a = [1, 2, 3];
// console.log("Truoc doi: ", a);
// var temp = a[1];
// a[1] = a[2];
// a[2] = temp;
// console.log("Sau khi doi: ", a);
// temp = a[2];
// a[2] = a[0];
// a[0] = temp;
// console.log("Sau khi doi: ", a);