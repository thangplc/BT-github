function getEl(selectors) {
    return document.querySelector(selectors);
}


// Khoi tao danh sach nhan vien
var dsnv = new DanhSachNhanVien();
// Khoi tao validator
var validator = new Validator();

/* 
    Ẩn nút cập nhật khi thêm sinh viên 
*/
getEl("#btnThem").addEventListener("click", function() {
    getEl("#btnCapNhat").style.display = "none";
    getEl("#btnThemNV").style.display = "block";
});


/* 
    Cập nhật nhân viên 
*/
getEl("#btnCapNhat").addEventListener("click", function() {
    for (var [index, item] of dsnv.arr.entries()) {
        if (index === inArr) {
            item.taiKhoan = getEl('#tknv').value;
            item.hoTen = getEl('#name').value;
            item.email = getEl('#email').value;
            item.matKhau = getEl('#password').value;
            item.ngayLam = getEl('#datepicker').value;
            item.LCB = getEl('#luongCB').value;
            item.chucVu = getEl('#chucvu').value;
            item.gioLam = getEl('#gioLam').value;
            break;
        };
    }
    var isVal = true;
    isVal &= validator.kiemTraRong(getEl('#tknv').value, '#tbTKNV') && validator.kiemTraTaiKhoan(getEl('#tknv').value, 4, 6, '#tbTKNV', 'Hãy nhập tối đa 4-6 ký số');
    isVal &= validator.kiemTraRong(getEl('#name').value, '#tbTen') && validator.kiemTraTenNV(getEl('#name').value, '#tbTen', 'Hãy nhập ký tự chữ');
    isVal &= validator.kiemTraRong(getEl('#email').value, '#tbEmail') && validator.kiemTraEmail(getEl('#email').value, '#tbEmail', 'Email chưa hợp lệ');
    isVal &= validator.kiemTraRong(getEl('#password').value, '#tbMatKhau') && validator.kiemTraMatKhau(getEl('#password').value, '#tbMatKhau');
    isVal &= validator.kiemTraRong(getEl('#datepicker').value, '#tbNgay') && validator.kiemTraNgay(getEl('#datepicker').value, '#tbNgay');
    isVal &= validator.kiemTraRong(getEl('#luongCB').value, '#tbLuongCB') && validator.kiemTraLCB(getEl('#luongCB').value, 1000000, 20000000, '#tbLuongCB', 'Mức lương cơ bản trong khoảng 1 000 000-20 000 000');
    isVal &= validator.kiemTraChucVu(getEl('#chucvu').value, '#tbChucVu');
    isVal &= validator.kiemTraRong(getEl('#gioLam').value, '#tbGiolam') && validator.kiemTraGioLam(getEl('#gioLam').value, 80, 200, '#tbGiolam', 'Mức giờ trong tháng khoảng 80-200h');
    if (!isVal) return;
    hienThiDanhDachNV(dsnv.arr);
    setLocalStorage();
});


/* 
    Thêm nhân viên 
*/
getEl("#btnThemNV").addEventListener("click", function() {
    /* 
        Lấy thông tin từ người dùng
    */
    var taiKhoan = getEl("#tknv").value;
    var hoTen = getEl("#name").value;
    var email = getEl("#email").value;
    var matKhau = getEl("#password").value;
    var ngayLam = getEl("#datepicker").value;
    var LCB = getEl("#luongCB").value;
    var chucVu = getEl("#chucvu").value;
    var gioLam = getEl("#gioLam").value;


    /* 
        Kiêm tra hợp lệ
    */
    var isVal = true;
    isVal &= validator.kiemTraRong(taiKhoan, '#tbTKNV') && validator.kiemTraTaiKhoan(taiKhoan, 4, 6, '#tbTKNV', 'Hãy nhập tối đa 4-6 ký số');
    isVal &= validator.kiemTraRong(hoTen, '#tbTen') && validator.kiemTraTenNV(hoTen, '#tbTen', 'Hãy nhập ký tự chữ');
    isVal &= validator.kiemTraRong(email, '#tbEmail') && validator.kiemTraEmail(email, '#tbEmail', 'Email chưa hợp lệ');
    isVal &= validator.kiemTraRong(matKhau, '#tbMatKhau') && validator.kiemTraMatKhau(matKhau, '#tbMatKhau');
    isVal &= validator.kiemTraRong(ngayLam, '#tbNgay') && validator.kiemTraNgay(ngayLam, '#tbNgay');
    isVal &= validator.kiemTraRong(LCB, '#tbLuongCB') && validator.kiemTraLCB(LCB, 1000000, 20000000, '#tbLuongCB', 'Mức lương cơ bản trong khoảng 1 000 000-20 000 000');
    isVal &= validator.kiemTraChucVu(chucVu, '#tbChucVu');
    isVal &= validator.kiemTraRong(gioLam, '#tbGiolam') && validator.kiemTraGioLam(gioLam, 80, 200, '#tbGiolam', 'Mức giờ trong tháng khoảng 80-200h');
    if (!isVal) return;
    // Khởi tạo đối tượng nhân viên từ lớp đối tương NhanVien
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, LCB, chucVu, gioLam)
    dsnv.themNhanVien(nv);
    console.log(dsnv.arr)
    hienThiDanhDachNV(dsnv.arr);
    setLocalStorage();

});
getLocalStorage();


/* 
    Hiển thi danh sách nhân viên
*/
function hienThiDanhDachNV(arr) {
    var content = "";
    arr.map(function(nv, index) {
        content += `
            <tr id = "nhan-vien">
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tinhLuong}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button class = "btn btn-info" id = "btnSua" data-toggle="modal" data-target="#myModal"  onclick ="capNhatNhanVien('${nv.hoTen}')">Sửa</button>
                    <button class = "btn btn-danger" id = "btn-confirm" data-toggle="modal" data-target="#mi-modal" onclick ="xoaNhanVien('${nv.hoTen}')" >Xóa</button>
                </td>
            </tr>
        `;
    });
    getEl("#tableDanhSach").innerHTML = content;
};
/* 
    Lưu dữ liệu vào localstoreage sau khi thêm nhân viên thành công 
*/
function setLocalStorage() {
    // Lưu data xuống local storage, chuyển dữ liệu thành chuỗi
    localStorage.setItem("DSNV", JSON.stringify(dsnv.arr));
};

function getLocalStorage() {
    // Lưu data xuống local storage, chuyển dữ liệu thành chuỗi
    dsnv.arr = JSON.parse(localStorage.getItem("DSNV"));
    hienThiDanhDachNV(dsnv.arr);
};
/* 
    Xóa nhân viên
*/
function xoaNhanVien(hoTen) {
    getEl("#btnXoaNV").addEventListener("click", function() {
        dsnv._xoaNhanVien(hoTen);
        hienThiDanhDachNV(dsnv.arr);
        setLocalStorage();
    });


}




function lamMoi() {
    getEl('#tknv').value = '';
    getEl('#name').value = '';
    getEl('#email').value = '';
    getEl('#password').value = '';
    getEl('#datepicker').value = '';
    getEl('#luongCB').value = '';
    getEl('#chucvu').value = 'Chọn chức vụ';
    getEl('#gioLam').value = '';
}