var inArr = 0;

function DanhSachNhanVien() {
    this.arr = [];
    this.themNhanVien = function(nhanVien) {
        this.arr.push(nhanVien);
    }
}

DanhSachNhanVien.prototype.timViTri = function(_taiKhoan) {
    // Nếu có trả về true
    // Nếu sai trả về -1
    return this.arr.findIndex(function(nhanVien) {
        return _taiKhoan === nhanVien.taiKhoan;
    });
};
DanhSachNhanVien.prototype._xoaNhanVien = function(_taiKhoan) {
    var index = this.timViTri(_taiKhoan);
    if (index !== -1) {
        this.arr.splice(index, 1);
    }
};

function capNhatNhanVien(_taiKhoan) {
    getEle('btnThemNV').style.display = 'none';
    getEle('btnCapNhat').style.display = 'block';
    deleteContentNote();
    resetInput();
    for (var [index, item] of dsnv.arr.entries()) {
        inArr = index;
        if (item.taiKhoan == _taiKhoan) {
            getEle('tknv').value = item.taiKhoan;
            getEle('name').value = item.hoTen;
            getEle('email').value = item.email;
            getEle('password').value = item.matKhau;
            getEle('datepicker').value = item.ngayLam;
            getEle('luongCB').value = item.luongCB;
            getEle('chucvu').value = item.chucVu;
            getEle('gioLam').value = item.gioLam;
            break;
        };
    }
}