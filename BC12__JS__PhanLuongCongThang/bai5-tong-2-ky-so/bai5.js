// INPUT
// so co 2 chu so
var n;
n = parseInt(prompt("Nhap vao so co 2 chu so: "))
    // XU LY
var hangChuc = parseInt(n / 10);
var hangDonvi = n % 10;
console.log(hangChuc);
console.log(hangDonvi);
// IN RA
document.write("Tong 2 ky so: ", (hangChuc + hangDonvi));