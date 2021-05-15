const USD = 23500;
// var tienUSD = parseFloat(prompt("Nhap so tien USD: "));
var tienUSD = 1;
do {

    tienUSD = parseFloat(prompt("Nhap so tien USD: "));
} while (tienUSD < 0);

var vnd = tienUSD * USD;
document.write(tienUSD + " USD = " + vnd + " VND");