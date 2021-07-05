function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngaylam, _LCB, _chucVu, _gioLam) {
    /* 
        khởi tạo các thuộc tính
    */
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngaylam;
    this.LCB = _LCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    /* 
        Tính lương nhân viên
    */
    this.tinhLuong = function() {
        var tongLuong = 0;
        switch (this.chucVu) {
            case "Sếp":
                {
                    tongLuong += parseFloat(this.LCB) * 3;
                    break;
                }
            case "Trưởng phòng":
                {
                    tongLuong += parseFloat(this.LCB) * 2;
                    break;
                }
            case "Nhân viên":
                {
                    tongLuong += parseFloat(this.LCB);
                    break;
                }
        }
        return tongLuong.toLocaleString();
    };
    this.tinhLuong = this.tinhLuong();
    /* 
        Xếp loại nhân viên 
    */
    this.xepLoai = function() {
        var xepLoai = '';
        if (this.gioLam >= 192) {
            xepLoai += "Xuất sắc";
        } else if (this.gioLam >= 176) {
            xepLoai += "Giỏi";
        } else if (this.gioLam >= 160) {
            xepLoai += "Khá";
        } else {
            xepLoai += "Trung bình";
        }
        return xepLoai;
    };
    this.xepLoai = this.xepLoai();
}