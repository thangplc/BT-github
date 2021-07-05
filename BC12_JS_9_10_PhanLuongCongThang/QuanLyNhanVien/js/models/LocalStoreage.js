function setLocalStorage() {
    localStorage.setItem('DSNV', JSON.stringify(dsnv.arr));
}


function getLocalStorage() {
    if (localStorage.getItem('DSNV')) {
        var list = JSON.parse(localStorage.getItem("DSNV"));
        dsnv.arr = list.map((item) => NhanVien.fromJson(item));
        hienThiNhanVien(dsnv.arr);
    }
}
getLocalStorage();