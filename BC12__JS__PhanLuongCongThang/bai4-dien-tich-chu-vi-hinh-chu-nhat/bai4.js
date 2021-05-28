// input
var dai = -1;
var rong = -1;
do {
    dai = parseFloat(prompt("Nhap chieu dai: "));
    rong = parseFloat(prompt("Nhap chieu rong: "));
} while (dai <= 0 || rong <= 0);

// handle
var p = (dai + rong) * 2;
var s = dai * rong;


// out put
document.write("Cheu dai= ", dai);
document.write("<br>");
document.write("Chieu rong = ", rong);
document.write("<br>");
document.write("Chu vi P = ", p);
document.write("<br>");
document.write("Dien tich S = ", s);