"use strict";

function queSel(selector) {
    return document.querySelector(selector);
}


// Mảng số nguyên
var tblDSSoNguyen = queSel("#tblDSSoNguyen");
var dSachSoNguyen = new Array();



// Mảng số thực
var tblDSSoThuc = queSel("#tblDSSoThuc");
var dSachSoThuc = new Array();



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

    if ((isNaN(soNguyen) || soNguyen !== parseInt(soNguyen) || soNguyen == '')) {
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
        dSachSoNguyen.push(soNguyen);
    }

}


// Tính tổng số dương
function tinhTongSoDuong() {
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var i = 0;
        var tongSoDuong = 0;
        while (i < dSachSoNguyen.length) {
            if (dSachSoNguyen[i] > 0) {
                tongSoDuong += dSachSoNguyen[i];
            }
            i++;
        }
        queSel("#titleKetQua").innerHTML = "Tổng số dương"
        queSel("#spanKetQua").innerHTML = tongSoDuong;

    }

}


// Đếm số dương
function demSoDuong() {
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var i = 0;
        var dem = 0;
        while (i < dSachSoNguyen.length) {
            if (dSachSoNguyen[i] > 0) {
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
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Dane sách rỗng!"
    } else {
        var soNhoNhat = dSachSoNguyen[0];
        var i = 0;
        var iSoNhoNhat = 0;
        while (i < dSachSoNguyen.length) {
            if (dSachSoNguyen[i] < soNhoNhat) {
                soNhoNhat = dSachSoNguyen[i];
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
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var soDuongNhoNhat = dSachSoNguyen[0];
        console.log(soDuongNhoNhat);
        var i = 0;
        var iSoDuongNhoNhat = 0;
        while (i < dSachSoNguyen.length) {
            if ((dSachSoNguyen[i] < soDuongNhoNhat) && (dSachSoNguyen[i] > 0)) {
                soDuongNhoNhat = dSachSoNguyen[i];
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
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"
    } else {
        var soChanCuoiCung;
        var i = 0;
        var iSoChanCuoiCung;
        var demSoChan = 0;
        while (i < dSachSoNguyen.length) {
            if (dSachSoNguyen[i] % 2 === 0) {
                soChanCuoiCung = dSachSoNguyen[i];
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
// Sắp xếp tăng dần
function sapXepTangDan() {
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"

    } else {
        var ketQua = dSachSoNguyen.sort(function(a, b) { return a - b });
        queSel("#titleKetQua").innerHTML = "Mảng tăng dần"
        queSel("#spanKetQua").innerHTML = ketQua;
    }
}

// Số nguyên tố đầu tiên
function kiemTraSNT(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
            break;
        }
    }
    return true;
}

function timSoNTDauTien() {
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"

    } else {
        var soNTDauTien;
        var iSoNTDauTien;
        var soLuongSNT = 0;
        for (var i = 0; i < dSachSoNguyen.length; i++) {
            // Kiểm tra số lương só nguyên tố
            if (kiemTraSNT(dSachSoNguyen[i])) {
                soLuongSNT++;
            }
            for (var j = 0; j < dSachSoNguyen.length; j++) {
                if (kiemTraSNT(dSachSoNguyen[j])) {
                    soNTDauTien = dSachSoNguyen[j];
                    iSoNTDauTien = j;
                    break;
                }

            }
        }
        if (soLuongSNT !== 0) {
            queSel("#titleKetQua").innerHTML = "Số nguyên tố đầu tiên"
            queSel("#spanKetQua").innerHTML = "Index:" + iSoNTDauTien + "; Value: " + soNTDauTien;
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
    if (kiemTraDSRong(dSachSoNguyen)) {
        queSel("#spanKetQua").innerHTML = "Danh sách rỗng!"

    } else {
        for (var i = 0; i < dSachSoNguyen.length; i++) {
            if (dSachSoNguyen[i] > 0) {
                slSoDuong++;
            }
            if (dSachSoNguyen[i] < 0) {
                slSoAm++;
            }
        }


        var ketQua = slSoAm === slSoDuong ? "SL âm(" + slSoAm + ")" + " = SL dương(" + slSoDuong + ")" : slSoAm > slSoDuong ? "SL âm(" + slSoAm + ")" + " > SL dương(" + slSoDuong + ")" : "SL âm(" + slSoAm + ")" + " < SL dương(" + slSoDuong + ")";
        queSel("#titleKetQua").innerHTML = "So sánh sl âm dương"
        queSel("#spanKetQua").innerHTML = ketQua;


    }

}

// Đổi chỗ 2 vị trí 
// Hàm đổi button bình thường thành button sự kiện modal
// function doiButtonThanhButtonModal() {

// }

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