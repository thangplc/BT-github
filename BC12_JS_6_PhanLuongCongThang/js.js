// Bài 1
function timSoNhoNhat() {
    var sum = 0;
    var min = 0;
    while (sum < 10000) {
        min++;
        sum += min;
    }
    return min;
}
document.getElementById("btnTimSoNhoNhat").onclick = function() {
    document.getElementById("resultSoNhoNhat").style.display = "block";
    var min = timSoNhoNhat();
    document.getElementById("resultSoNhoNhat").innerText = "Số n nhỏ nhất thỏa mãn (1+2+3+...+ n>10000): " + min;
};
// Bài 2
function tinhBieuThuc(x, n) {
    var sum = 0;
    var i = 1;
    var tich = 1;
    // if (x == 0 && n == 0) {
    //     s = 1;
    // }
    while (i <= n) {
        tich *= x;
        sum += tich;
        i++;
    }
    return sum;
}
document.getElementById("btnTinhTongBieuThuc").onclick = function() {
    debugger
    var num = document.getElementById("b2-num").value;
    var x = document.getElementById("b2-x").value;
    document.getElementById("resultTongBieuThuc").style.display = "block";
    var sum = 0;
    if (num <= 0 || x == "" || num == "" || isNaN(num) || isNaN(x) || num != parseInt(num)) {
        alert('Bài 2: Nhập sai! n >0, là số nguyên; x là số');
    } else {
        sum += tinhBieuThuc(x, num);
        document.getElementById("resultTongBieuThuc").innerText = "S(" + num + ", " + x + ") = " + sum;

    }
}


// Bài 3
function tinhGiaiThua(num) {

    var giaiThua = 1;
    var i = 1;
    if (num == 0) {
        giaiThua = 1;
    }
    while (i <= num) {
        giaiThua *= i;
        i++;
    }
    return giaiThua;
}
document.getElementById("btnTinhGiaiThua").onclick = function() {
    var num = document.getElementById("b3-num").value;
    document.getElementById("resultGiaiThua").style.display = "block";
    var giaiThua = tinhGiaiThua(num);
    // var a;
    // if (num !== parseInt(num)) {
    //     a = false;
    // }
    //console.log(a);
    if (num == "" || isNaN(num) || num < 0 || num != parseInt(num)) {
        alert("Bài 3: Nhập sai! Yêu cầu nhập lại! n >=0 , n là số nguyên!");
    } else {
        document.getElementById("resultGiaiThua").innerText = "GT(" + num + ") = " + giaiThua;
    }
};
//Bai 4:
var setBackgroundColor = function() {
    document.getElementById("b4-newDiv").style.display = "block";
    var listDiv = document.getElementsByClassName("new-div");
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
document.getElementById("btnTaoDiv").addEventListener("click", setBackgroundColor);