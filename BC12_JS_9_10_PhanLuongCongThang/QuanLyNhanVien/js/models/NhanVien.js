function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
}

NhanVien.prototype.tongLuong = function() {
    switch (this.chucVu) {
        case "Sếp":
            return (this.luongCB * 3).toLocaleString();
        case "Trưởng phòng":
            return (this.luongCB * 2).toLocaleString();
        case "Nhân viên":
            return (this.luongCB * 1).toLocaleString();
    }
};
NhanVien.fromJson = function(json) {
    return new NhanVien(json.taiKhoan, json.hoTen, json.email, json.matKhau, json.ngayLam, json.luongCB, json.chucVu, json.gioLam);
}
NhanVien.prototype.xepLoai = function() {
    if (this.gioLam >= 192) {
        return 'Xuất sắc';
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
        return 'Giỏi';
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
        return 'Khá';
    } else {
        return 'Trung bình';
    }
}