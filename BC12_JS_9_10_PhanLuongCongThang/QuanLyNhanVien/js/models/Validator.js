// function getEl(selectors) {
//     return document.querySelector(selectors);
// }

function Validator() {
    /* 
        Kiểm tra rỗng
    */
    this.kiemTraRong = function(value, spanID) {
        if (!value) {
            getEl(spanID).style.display = 'block';
            getEl(spanID).innerHTML = "(*) Vui lòng không để rỗng.";
            return false;
        } else {
            getEl(spanID).innerHTML = '';
            return true;
        }
    };
    /* 
        Kiểm tra tài khoản[4;6]
    */
    this.kiemTraTaiKhoan = function(value, min, max, spanID, mess) {
        if (value.length >= min && value.length <= max) {
            getEl(spanID).innerHTML = '';
            return true;
        } else {
            getEl(spanID).style.display = 'block';
            getEl(spanID).innerHTML = '(*)' + mess;
            return false;
        }
    };
    /* 
        Kiểm tra tên nhân viên là chữ
    */
    this.kiemTraTenNV = function(value, spanID, mess) {
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

        if (pattern.test(value)) {
            getEl(spanID).innerHTML = '';
            return true;
        }
        getEl(spanID).style.display = 'block';
        getEl(spanID).innerHTML = '(*)' + mess;
        return false;
    };
    /* 
        Kiêm tra định dạng email
    */
    this.kiemTraEmail = function(value, spanID, mess) {
        var el = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (el.test(value)) {
            getEl(spanID).innerHTML = '';
            return true;
        } else {
            getEl(spanID).style.display = 'block';
            getEl(spanID).innerHTML = '(*)' + mess;
            return false;
        }
    };
    /* 
        Kiểm tra mật khâu: 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
    */
    this.kiemTraMatKhau = function(value, spanID) {
        var lengthVal = /^([a-zA-Z0-9\d@$!%*?&]{6,10})$/;
        var UpcaseLeter = /(?=.*?[A-Z])/;
        var numberLeter = /(?=.\d)/;
        var specialLeter = /(?=.*[@$!%*?&])/;
        var numberNote = (numberLeter.test(value)) ? '' : 'Ít nhất một ký tự số. '
        if (lengthVal.test(value)) {
            var lengthNote = '';
        } else {
            lengthNote = "6-10 ký tự. "
        }
        if (UpcaseLeter.test(value)) {
            var upcaseNote = '';
        } else {
            upcaseNote = 'Ít nhất một chữ in hoa. ';
        }
        var specialNote = (specialLeter.test(value)) ? '' : 'Ít nhất một ký tự đặc biệt.';
        getEl(spanID).innerHTML = lengthNote + numberNote + upcaseNote + specialNote;
        if (lengthNote === '' && upcaseNote === '' && specialNote === '') {
            return true;
        } else {
            return false;
        }
    };
    /* 
        Kiểm tra định dạng ngày tháng
    */
    this.kiemTraNgay = function(value, spanID) {
        var dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (dateRegex.test(value)) {
            getEl(spanID).innerHTML = '';
            return true;
        } else {
            getEl(spanID).style.display = 'block';
            getEl(spanID).innerHTML = '(*) Không đúng định dạng MM/DD/YY';
            return false;
        }
    };
    /* 
        Kiểm tra lương cơ bản
    */
    this.kiemTraLCB = function(value, min, max, spanID, mess) {
        if (value >= min && value <= max) {
            getEl(spanID).innerHTML = '';
            return true;
        } else {
            getEl(spanID).style.display = 'block';
            getEl(spanID).innerHTML = '(*) ' + mess;
            return false;
        }
    };
    /* 
        Kiểm tra chức vụ
    */
    this.kiemTraChucVu = function(value, spanID) {
        if (value === 'Chọn chức vụ') {
            getEl(spanID).style.display = 'block';
            getEl(spanID).innerHTML = '(*) Hãy chọn chức vụ cho nhân viên';
            return false;
        } else {
            getEl(spanID).innerHTML = '';
            return true;
        }
    };
    /* 
        Kiểm tra gio lam
    */
    this.kiemTraGioLam = function(value, min, max, spanID, mess) {
        if (value >= min && value <= max) {
            getEl(spanID).innerHTML = '';
            return true;

        } else {
            getEl(spanID).style.display = 'block';
            getEl(spanID).innerHTML = '(*) ' + mess;
            return false;
        }
    }

}

function xoaThongBaoKhongHopLe() {
    var parentEleNote = document.getElmentsByClassName('modal-body')[0];
    var noteTextLength = parentEleNote.getElmentsByClassName('sp-thongbao').length;
    for (var i = 0; i < noteTextLength; i++) {
        parentEleNote.getElmentsByClassName('sp-thongbao')[i].innerHTML = '';
    }
}