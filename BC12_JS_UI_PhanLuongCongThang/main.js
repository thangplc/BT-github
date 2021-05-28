/* input
Chiều cao
Cân nặng
*/
//  handle
// set innerHTML text cua span bang gia tri input nhap vao

// output
// span can nag va span chieu cao 
var btn = document.getElementById("btnNhapNhap");

btn.onclick = function() {
    // input
    var chieuCao = document.getElementById("ipChieuCao").value;
    var canNang = document.getElementById("ipCanNang").value;


    // console.log(chieuCao)
    // handle and output
    document.getElementById("spanChieuCao").innerText = chieuCao + "cm";
    document.getElementById("spanCanNang").innerText = canNang + "kg";




}