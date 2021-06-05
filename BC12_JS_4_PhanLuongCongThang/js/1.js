// input: 3 số nhập vào từ input
/* Handle
    if(nguoi dung k nhap vao)
        Yêu cầu nhập lại
    else(ngươi dùng nhập vào)
        if(1/3 input nhập vào không là số nguyên)
            Yêu cầu nhập số nguyên
        else(nhập vào hợp lệ)
            chuyển số bé nhất vào a: 
                tạo biến temp, so sánh a và b, nếu a > b thì gán b=a;(sau bước này b sẽ nằm đầu)
                tiếp tục kiểm tra so sánh a và c(có nghĩa là b cũ và c), nếu a > c thì gán c = a 
                (Sau 2 bước: a sẽ là số bé nhất)
            chuyển số bé nhì vào số b:
                tiếp tục so sánh 2 số còn lại (b và c) nếu b > c gán b = c

// output: in ra thứ tự tăng dần

*/
document.getElementById("sort").onclick = function() {
    var temp;
    var a = Number(document.getElementById("numOne").value);
    var b = Number(document.getElementById("numTwo").value);
    var c = Number(document.getElementById("numThree").value);
    debugger
    if (a === "" && b === "" && c === "") {
        alert('Vui long nhap lieu');

    } else {
        if ((a !== parseInt(a)) || (c !== parseInt(c)) || (b !== parseInt(b))) {
            alert('Vui long nhap lại, yêu cầu số nguyên');

        } else {
            //  chuyen so be nhat vao a
            if (a > b) {
                temp = a;
                a = b;
                b = temp;
            }
            if (a > c) {
                temp = a;
                a = c;
                c = temp;
            }
            // chuyển số bé nhì vào b
            if (b > c) {
                temp = b;
                b = c;
                c = temp;
            }
            document.getElementById("result-sort").innerText = a + " -> " + b + " -> " + c;
        }

    }



}