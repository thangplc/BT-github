var dsnv = new DanhSachNhanVien();
var validator = new Validator();

function getEle(id) {
    return document.getElementById(id);
}
// print staff table
function hienThiNhanVien(nhanVien) {
    var content = '';
    nhanVien.map(function(item) {
        console.log(item);
        content += `
            <tr>
                <td>${item.taiKhoan}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.ngayLam}</td>
                <td>${item.chucVu}</td>
                <td>${item.tongLuong()}</td>
                <td>${item.xepLoai()}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal"
                    data-target="#myModal" onclick="capNhatNhanVien('${item.taiKhoan}')">Sửa</button>
                    <button class="btn btn-danger" id = "btn-confirm" data-toggle="modal" data-target="#comfirmDel" onclick ="xoaNhanVien('${item.taiKhoan}')">Xoá</button>
                </td>
            </tr>
        `;
    });
    getEle('tableDanhSach').innerHTML = content;
}
getEle('btnThem').addEventListener('click', function() {
    getEle('btnThemNV').style.display = 'block';
    getEle('btnCapNhat').style.display = 'none';
    deleteContentNote();
    resetInput();
});

getEle('btnCapNhat').addEventListener('click', function() {
    for (var [index, item] of dsnv.arr.entries()) {
        if (index == inArr) {
            item.taiKhoan = getEle('tknv').value;
            item.hoTen = getEle('name').value;
            item.email = getEle('email').value;
            item.matKhau = getEle('password').value;
            item.ngayLam = getEle('datepicker').value;
            item.luongCB = getEle('luongCB').value;
            item.chucVu = getEle('chucvu').value;
            item.gioLam = getEle('gioLam').value;
            break;
        };
    }
    var isVal = true;
    isVal &= validator.kiemTraRong(getEle('tknv').value, 'tbTKNV') && validator.kiemTraTaiKhoan(getEle('tknv').value, 4, 6, 'tbTKNV', 'Hãy nhập tối đa 4-6 ký số');
    isVal &= validator.kiemTraRong(getEle('name').value, 'tbTen') && validator.kiemTraTenNV(getEle('name').value, 'tbTen', 'Hãy nhập ký tự chữ');
    isVal &= validator.kiemTraRong(getEle('email').value, 'tbEmail') && validator.kiemTraEmail(getEle('email').value, 'tbEmail', 'Email chưa hợp lệ');
    isVal &= validator.kiemTraRong(getEle('password').value, 'tbMatKhau') && validator.kiemTraMatKhau(getEle('password').value, 'tbMatKhau');
    isVal &= validator.kiemTraRong(getEle('datepicker').value, 'tbNgay') && validator.kiemTraNgay(getEle('datepicker').value, 'tbNgay');
    isVal &= validator.kiemTraRong(getEle('luongCB').value, 'tbLuongCB') && validator.kiemTraLCB(getEle('luongCB').value, 1000000, 20000000, 'tbLuongCB', '(*) Mức lương cơ bản trong khoảng 1.000.000-20.000.000');
    isVal &= validator.kiemTraChucVu(getEle('chucvu').value, 'tbChucVu');
    isVal &= validator.kiemTraRong(getEle('gioLam').value, 'tbGiolam') && validator.kiemTraGioLam(getEle('gioLam').value, 80, 200, 'tbGiolam', '(*)Mức giờ trong tháng khoảng 80-200h');
    if (!isVal) return;
    hienThiNhanVien(dsnv.arr);
    setLocalStorage();
});
getEle('btnTimNV').addEventListener('click', function() {
    var loaiNV = getEle('searchName').value;
    if (loaiNV != '') {
        var ketQua = dsnv.arr.filter(function(item) {
            return item.xepLoai() === loaiNV;
        });
        hienThiNhanVien(ketQua);
    } else {
        hienThiNhanVien(dsnv.arr);
    }
});
getEle('searchName').addEventListener('input', function() {
    if (getEle('searchName').value === "") {
        hienThiNhanVien(dsnv.arr);
    }
})
getEle('btnThemNV').addEventListener('click', function() {
    var taiKhoan = getEle('tknv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCB = parseFloat(getEle('luongCB').value);
    var chucVu = getEle('chucvu').value;
    var gioLam = parseFloat(getEle('gioLam').value);
    var isVal = true;
    isVal &= validator.kiemTraRong(taiKhoan, 'tbTKNV') && validator.kiemTraTaiKhoan(taiKhoan, 4, 6, 'tbTKNV', 'Hãy nhập tối đa 4-6 ký số');
    isVal &= validator.kiemTraRong(hoTen, 'tbTen') && validator.kiemTraTenNV(hoTen, 'tbTen', 'Hãy nhập ký tự chữ');
    isVal &= validator.kiemTraRong(email, 'tbEmail') && validator.kiemTraEmail(email, 'tbEmail', 'Email chưa hợp lệ');
    isVal &= validator.kiemTraRong(matKhau, 'tbMatKhau') && validator.kiemTraMatKhau(matKhau, 'tbMatKhau');
    isVal &= validator.kiemTraRong(ngayLam, 'tbNgay') && validator.kiemTraNgay(ngayLam, 'tbNgay');
    isVal &= validator.kiemTraRong(luongCB, 'tbLuongCB') && validator.kiemTraLCB(luongCB, 1000000, 20000000, 'tbLuongCB', 'Mức lương cơ bản trong khoảng 1.000.000-20.000.000');
    isVal &= validator.kiemTraChucVu(chucVu, 'tbChucVu');
    isVal &= validator.kiemTraRong(gioLam, 'tbGiolam') && validator.kiemTraGioLam(gioLam, 80, 200, 'tbGiolam', 'Mức giờ trong tháng khoảng 80-200h');
    if (!isVal) return;



    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    dsnv.themNhanVien(nv);
    hienThiNhanVien(dsnv.arr);
    setLocalStorage();
    resetInput();
});

/* 
    Xóa nhân viên
*/
function xoaNhanVien(taiKhoan) {
    getEle("btnXoaNV").addEventListener("click", function() {
        dsnv._xoaNhanVien(taiKhoan);
        hienThiNhanVien(dsnv.arr);
        setLocalStorage();
    });


}


function resetInput() {
    getEle('tknv').value = '';
    getEle('name').value = '';
    getEle('email').value = '';
    getEle('password').value = '';
    getEle('datepicker').value = '';
    getEle('luongCB').value = '';
    getEle('chucvu').value = 'Chọn chức vụ';
    getEle('gioLam').value = '';
}