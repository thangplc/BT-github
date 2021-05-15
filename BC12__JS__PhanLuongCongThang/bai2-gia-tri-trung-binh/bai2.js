var i = 1;
var s = 0;
while (i <= 5) {
    var n = parseFloat(prompt("Nhap vao so thuc thu " + i));
    s += n;
    i++;
}
document.write("AVG = ", (s / 5));