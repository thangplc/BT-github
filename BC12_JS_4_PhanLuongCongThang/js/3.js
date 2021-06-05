/*
    input: 3 số nhập vào từ input num1, num2, num3
    handle: 
    if(Nếu người dùng khônng nhập vào 1/3 input){
        yêu cầu nhập lại
    }
    else(người dùng đã nhập){
        if(3 số nhập vào là đều số nguyên)
            if ((num1, num2 chẵn, num3 lẻ)
              ||(num2, num3 chăn, num2 lẻ)
              ||(num3, num1 chẵn, num1 lẻ)
              slChan = 2;
              slLe = 1;
            else if(3 số đều chẵn)
                slChan = 3;
                slLe = 0;
            else if(3 số đều lẻ)
                slChan = 0;
                slLe = 3;
            else(trường hợp còn lại)
              slChan = 1;
              slLe = 2;
        else(người dùng nhập vào 1/3 số k là số nguyên)
            yêu cầu nhập lại
    }
        
    output: in ra sô sl số lẻ và chẵn
*/
document.getElementById("check").onclick = function() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    if (num1 == "" || num2 == "" || num3 == "") {
        alert('Vui lòng nhập liệu');
    } else {
        if (num1 === parseInt(num1) && num2 === parseInt(num2) && num3 === parseInt(num3)) {
            var slChan = 0;
            var slLe = 0;
            if ((num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 != 0) || (num1 % 2 == 0 && num3 % 2 == 0 && num2 % 2 != 0) || (num2 % 2 == 0 && num3 % 2 == 0 && num1 % 2 != 0)) {
                slChan = 2;
                slLe = 1;
            } else if (num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0) {
                slChan = 3;
                slLe = 0;
            } else if (num1 % 2 != 0 && num2 % 2 != 0 && num3 % 2 != 0) {
                slLe = 3;
                slChan = 0
            } else {
                slChan = 1;
                slLe = 2;
            }
            console.log(slChan);
            console.log(slLe);
            document.getElementById("le").innerText = slLe;
            document.getElementById("chan").innerText = slChan;
        } else {
            alert('Nhập dữ liệu input không hợp lệ! Chỉ được nhập số nguyên');
        }
    }



}