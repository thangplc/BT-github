/* input
Chiều cao
Cân nặng
*/


var btn = document.getElementById("btnNhapNhap");

btn.onclick = function() {
    var chieuCao = document.getElementById("ipChieuCao").value;
    var canNang = document.getElementById("ipCanNang").value;


    // console.log(chieuCao)

    document.getElementById("spanChieuCao").innerText = chieuCao + "cm";
    document.getElementById("spanCanNang").innerText = canNang + "kg";




}