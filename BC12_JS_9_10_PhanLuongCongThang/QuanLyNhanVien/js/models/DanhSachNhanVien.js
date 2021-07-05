var inArr = 0;

function DanhSachNhanVien() {
    this.arr = [];

    this.themNhanVien = function(nhanVien) {
        this.arr.push(nhanVien);
    }

};
DanhSachNhanVien.prototype.timViTri = function(hoTen) {
    // Nếu có trả về true
    // Nếu sai trả về -1
    return this.arr.findIndex(function(nhanVien) {
        return hoTen === nhanVien.hoTen;
    });
};
DanhSachNhanVien.prototype._xoaNhanVien = function(hoTen) {
    var index = this.timViTri(hoTen);
    if (index !== -1) {
        this.arr.splice(index, 1);


    }
};

/* 
    Cập nhật sinh viên
*/


function capNhatNhanVien(_hoTen) {
    getEl('#btnThemNV').style.display = 'none';
    getEl('#btnCapNhat').style.display = 'block';
    // xoaThongBaoKhongHopLe();
    for (var [index, item] of dsnv.arr.entries()) {
        inArr = index;
        if (item.hoTen === _hoTen) {
            getEl('#tknv').value = item.taiKhoan;
            getEl('#name').value = item.hoTen;
            getEl('#email').value = item.email;
            getEl('#password').value = item.matKhau;
            getEl('#datepicker').value = item.ngayLam;
            getEl('#luongCB').value = item.LCB;
            getEl('#chucvu').value = item.chucVu;
            getEl('#gioLam').value = item.gioLam;
            break;
        }
    }
};