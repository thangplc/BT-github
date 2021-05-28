// input
const USD = 23500;
// var tienUSD = parseFloat(prompt("Nhap so tien USD: "));
var tienUSD = 1;
do {

    tienUSD = parseFloat(prompt("Nhap so tien USD: "));
} while (tienUSD < 0);
// handle
var vnd = tienUSD * USD;
// output
document.write(tienUSD + " USD = " + vnd + " VND");