// input
var i = 1;
var s = 0;
var n = 5;
while (i <= n) {
    var _num = parseFloat(prompt("Nhap vao so thuc thu " + i));
    // handle
    s += _num;
    i++;
}
// output
document.write("AVG = ", (s / n));