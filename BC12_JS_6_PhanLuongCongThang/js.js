// Bài 1
function timSoNhoNhat() {
    var s = 0;
    var n = 0;
    while (s < 10000) {
        n++;
        s += n;
    }
    return n;
}
document.getElementById("b1-btn").onclick = function() {
        document.getElementById("b1-result").style.display = "block";
        var min = timSoNhoNhat();
        document.getElementById("b1-result").innerText = "Số n nhỏ nhất thỏa mãn (1+2+3+...+ n>10000): " + min;
    }
    // Bài 2
function tinhBieuThuc(x, n) {
    var s = 0;
    var i = 1;
    var t = 1;
    // if (x == 0 && n == 0) {
    //     s = 1;
    // }
    while (i <= n) {
        t *= x;
        s += t;
        i++;
    }
    return s;
}
document.getElementById("b2-btn").onclick = function() {
    debugger
    var n = document.getElementById("b2-n").value;
    var x = document.getElementById("b2-x").value;
    document.getElementById("b2-result").style.display = "block";
    var s = 0;
    if (n <= 0 || x == "" || n == "" || isNaN(n) || isNaN(x) || n != parseInt(n)) {
        alert('Bài 2: Nhập sai! n >0, là số nguyên; x là số');
    } else {
        s += tinhBieuThuc(x, n);
        document.getElementById("b2-result").innerText = "S(" + n + ", " + x + ") = " + s;

    }
}


// Bài 3
function tinhGiaiThua(n) {

    var s = 1;
    var i = 1;
    if (n == 0) {
        s = 1;
    }
    while (i <= n) {
        s *= i;
        i++;
    }
    return s;
}
document.getElementById("b3-btn").onclick = function() {
        var num = document.getElementById("b3-n").value;
        document.getElementById("b3-result").style.display = "block";
        var giaiThua = tinhGiaiThua(num);
        // var a;
        // if (num !== parseInt(num)) {
        //     a = false;
        // }
        //console.log(a);
        if (num == "" || isNaN(num) || num < 0 || num != parseInt(num)) {
            alert("Bài 3: Nhập sai! Yêu cầu nhập lại! n >=0 , n là số nguyên!");
        } else {
            document.getElementById("b3-result").innerText = "GT(" + num + ") = " + giaiThua;
        }
    }
    //Bai 4:
var setBackgroundColor = function() {
    document.getElementById("b4-newDiv").style.display = "block";
    var listDiv = document.getElementsByClassName("b4-div");
    listDiv[0].style.backgroundColor = "blue";
    listDiv[1].style.backgroundColor = "red";
    listDiv[2].style.backgroundColor = "blue";
    listDiv[3].style.backgroundColor = "red";
    listDiv[4].style.backgroundColor = "blue";
    listDiv[5].style.backgroundColor = "red";
    listDiv[6].style.backgroundColor = "blue";
    listDiv[7].style.backgroundColor = "red";
    listDiv[8].style.backgroundColor = "blue";
    listDiv[9].style.backgroundColor = "red";
    listDiv[10].style.backgroundColor = "blue";
}
document.getElementById("b4-btn").addEventListener("click", setBackgroundColor);