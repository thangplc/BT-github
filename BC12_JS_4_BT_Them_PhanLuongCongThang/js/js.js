/* Bài 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
Tìm ngày, tháng, năm của ngày tiếp theo.Tương tự tìm ngày tháng năm của ngày trước đó.
*/


/* bài 2: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).
    input: thang và năm nhập vào từ input
    handle:
        điều kiện thỏa đề bài: tháng thuộc [1;12] và năm <0, input không được rỗng
        if(tháng và năm không thỏa 3 điều kiện trên){
            yêu cầu nhập lại
        }
        else{
            sử dụng switch
                case 1, 3, 5, 7, 8, 10, 12: có 31 ngày
                case 4, 6, 11, 9: có 30 ngày
                case 2:
                    if(năm nhuận) có 29 ngày
                    else(năm bình thường) có 28 ngày
        }
    output: in ra tháng năm có ngày tương ứng vào thẻ nội dụng p
*/

document.getElementById("btn-b2").onclick = function() {
    var m = Number(document.getElementById("month").value);
    var y = Number(document.getElementById("year").value);
    var d;

    if (m == "" || y == "" || m <= 0 || m > 12 || y <= 0 || y !== parseInt(y) || m <= 0 || m !== parseInt(m)) {
        alert("(BÀI2)Nhập sai, tháng thuộc [1, 12], năm >0, số nguyên");
    } else {
        switch (m) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                d = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                d = 30;
                break;
            case 2:
                {
                    if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0))
                        d = 29;
                    else
                        d = 28;
                    break;
                }
            default:
                alert("Nhập sai, tháng thuộc [1, 12], năm >0, số nguyên");

        }
        document.getElementById("b2-result").innerText = "Tháng " + m + "/" + y + " có " + d + " ngày";
        document.getElementById("b2-result").style.display = 'block';
    }


}

/*
    Bài3: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
    input: số nguyên có 3 chữ số 
    handle: 
        điều kiện thỏa mãn đầu bài: input không được rỗng , không thuộc [-99, 99] và >1000 và < -1000
        if(value input không thỏa mãn các điều kiện ở trên){
            yêu cầu nhập lại
        }
        else(thõa mãn điều kiện){
            tạo biến read = '';
            tạo biến tạm temp = n(tác dụng để đọc số âm)
            if(n input là số âm){
                n = n * -1(chuyển thành số dương để vào được switch)
            }
            tạo các biến hàng chục, đơn vi, trăm, read
            switch(hangTram){
                case1, 2, 3, 4, 5, 6, 7, 8, 9: read += cách đọc tương ứng(Một trăm, Hai, ....)
            }
            switch(hangChục){
                case 0, 1, 2, 3, 4, 5, 6, 7, 8, 9: read += cách đọc tương ứng(Lẻ, Mười, Hai, Ba, ....)
            }
            switch(hàng đơn vi){
                case 0, 1, 2, 3, 4, 5, 6, 7, 8, 9: read += cách đọc tương ứng("", Một, Hai, Ba, ....)
            }
            if(hangdonvi và hàng chục đều  = 0){
                switch(hang tram){
                case 1, 2, 3, 4, 5, 6, 7, 8, 9: read = cách đọc tươn ứng(Một trăm, Hai trăm, Ba trăm, ...)
                }
            }
            if(temp là số âm){
                read = "Âm" + read;
            }
        }
        output: in ra cách đọc vào 1 thẻ nội dung p
*/
document.getElementById("btn-b3").onclick = function() {
    debugger
    document.getElementById("b3-result").style.display = "block";
    var n = Number(document.getElementById("num-b3").value);
    var temp = n;
    if (n < 0) {
        n = n * -1;
    }
    var read = '';
    if (n == "" || (n >= -99 && n <= 99) || n > 999 || n < -999 || n !== parseInt(n)) {
        alert("(BÀI 3)Nhập sai, yêu cầu nhập số nguyên có 3 CHỮ SỐ");
    } else {
        // alert("Chuẩn");
        var hangDonVi = parseInt(n) % 10;
        n = n / 10;
        console.log("n = ", n);
        var hangChuc = parseInt(n) % 10;
        var hangTram = parseInt(n / 10)
        console.log("n = ", n);
        switch (hangTram) {
            case 1:
                read += "Một trăm  ";
                break;
            case 2:
                read += "Hai trăm  ";
                break;
            case 3:
                read += "Ba trăm  ";
                break;
            case 4:
                read += "Bốn trăm  ";
                break;
            case 5:
                read += "Năm trăm  ";
                break;
            case 6:
                read += "Sáu trăm  ";
                break;
            case 7:
                read += "Bảy trăm  ";
                break;
            case 8:
                read += "Tám trăm ";
                break;
            case 9:
                read += "Chín trăm ";
                break;

        }
        console.log(read);
        switch (hangChuc) {
            case 0:
                read += "lẻ ";
                break;
            case 1:
                read += "mười ";
                break;
            case 2:
                read += "hai mươi ";
                break;
            case 3:
                read += "ba mươi ";
                break;
            case 4:
                read += "bốn mươi ";
                break;
            case 5:
                read += "năm mươi ";
                break;
            case 6:
                read = "sáu mươi ";
                break;
            case 7:
                read += "bảy mươi ";
                break;
            case 8:
                read += "tám mươi ";
                break;
            case 9:
                read += "chín mươi ";
                break;

        }
        console.log(read);

        switch (hangDonVi) {
            case 0:
                read += "";
                break;
            case 1:
                read += "một";
                break;
            case 2:
                read += "hai";
                break;
            case 3:
                read += "ba";
                break;
            case 4:
                read += "bốn";
                break;
            case 5:
                read += "năm";
                break;
            case 6:
                read += "sáu";
                break;
            case 7:
                read += "bảy";
                break;
            case 8:
                read += "tám";
                break;
            case 9:
                read += "chín";
                break;

        }
        if (hangChuc == 0 && hangDonVi == 0) {
            switch (hangTram) {

                case 1:
                    read = "Một trăm";
                    break;
                case 2:
                    read = "Hai trăm";
                    break;
                case 3:
                    read = "Ba trăm";
                    break;
                case 4:
                    read = "Bốn trăm";
                    break;
                case 5:
                    read = "Năm trăm";
                    break;
                case 6:
                    read = "Sáu trăm";
                    break;
                case 7:
                    read = "Bảy trăm";
                    break;
                case 8:
                    read = "Tám trăm";
                    break;
                case 9:
                    read = "Chín trăm";
                    break;
            }
        }
        if (temp < 0) {
            read = "Âm " + read;

        } else {
            read = read;
        }
        document.getElementById("b3-result").innerText = read;


    }
}

/*bài 4: Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
trình in tên sinh viên xa trường nhất.
        INPUT: tọa độ nhà của  sinh viên (x1, y1); (x2, y2); (x3, y3) và tọa đô trương(const) mặc định (0;0)
        HANDLE: 
            ĐK: các input không được rỗng, và là số (Number)
            if(Các input không thỏa ĐK){
                Yêu cầu nhập lại;
            }
            else(Đã thỏa mãn){
                KhoangCach(sv1, Trường) = kc_1 = Sqrt((X_TRUONG - x1)(X_TRUONG - x1)+(Y_TRUONG - y1)*(Y_TRUONG - y1))
                KhoangCach(sv2, Trường) = kc_2 = Sqrt((X_TRUONG - x2)(X_TRUONG - x2)+(Y_TRUONG - y2)*(Y_TRUONG - y2))
                KhoangCach(sv3, Trường) = kc_3 = Sqrt((X_TRUONG - x3)(X_TRUONG - x3)+(Y_TRUONG - y3)*(Y_TRUONG - y3))
                So sánh khoảng cách lớn nhất
                if(kc_1 là max và (kc_1 khác kc_2 và Kc_3)){
                    sv1 xa trường nhất
                }
                else if( kc_2 = max && (kc_2 khác kc_1 và Kc_3)){
                    sv2 xa trường nhất
                }
                else if( (kc_1 = kc_2 = max) và (kc_1 khác kc_3) ){
                    sv1, sv2 xa trường nhất
                }
                else if(kc_1 = kc_3 = max và kc_1 khác kc_2){
                    sv1, sv3 xa trường nhất
                }
                 else if(kc_2 = kc_3 = max và kc_2 khác kc_1){
                    sv2, sv3 xa trường nhất
                }
                else(sv3 là max){
                    sv3 xa trường nhất
                }
            }
        OUTPUT: in ra sinh viên xa trường nhất vào thẻ nội dung p
*/
document.getElementById("btn-b4").onclick = function() {
    debugger
    const X_SCHOOL = 0;
    const Y_SCHOOL = 0;
    var text;
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;
    var x3 = document.getElementById("x3").value;
    var y3 = document.getElementById("y3").value;
    var student1 = document.getElementById("sv1").value;
    var student2 = document.getElementById("sv2").value;
    var student3 = document.getElementById("sv3").value;
    document.getElementById("b4-result").style.display = 'block';
    document.getElementById("kc").style.display = 'block';

    if (x1 == '' || x2 == '' || x3 == '' || y1 == '' || y2 == '' || y3 == '' || x1 != Number(x1) || x2 != Number(x2) || x3 != Number(x3) || y1 != Number(y1) || y2 != Number(y2) || y3 != Number(y3)) {
        alert('Nhập sai ! Yêu cầu số nguyên');
    } else {
        var kc_1 = Math.sqrt(Math.pow((X_SCHOOL - x1), 2) + Math.pow((Y_SCHOOL - y1), 2));
        var kc_2 = Math.sqrt(Math.pow((X_SCHOOL - x2), 2) + Math.pow((Y_SCHOOL - y2), 2));
        var kc_3 = Math.sqrt(Math.pow((X_SCHOOL - x3), 2) + Math.pow((Y_SCHOOL - y3), 2));


        // So sanh
        var max = kc_1 > kc_2 ? (kc_1 > kc_3 ? kc_1 : kc_3) : ((kc_2 > kc_3 ? kc_2 : kc_3));

        alert("Chuẩn");
        console.log("kc1: ", kc_1);
        console.log("kc2: ", kc_2);
        console.log("kc3: ", kc_3);
        console.log("max", max);
        if (max == kc_1 && max != kc_2 && max != kc_3) {
            text = student1 + " xa trường nhất";
        } else if (max == kc_2 && max != kc_1 && max != kc_3) {
            text = student2 + " xa trường nhất";
        } else if (max == kc_1 && max == kc_2 && max != kc_3) {
            text = student1 + " và " + student2 + " xa trường nhất";
        } else if (max == kc_2 && max == kc_3 && max != kc_1) {
            text = student2 + " và " + student3 + " xa trường nhất";
        } else if (max == kc_3 && max == kc_1 && max != kc_2) {
            text = student1 + " và " + student3 + " xa trường nhất";
        } else {
            text = student3 + " xa trường nhất";

        }
        document.getElementById("kc").innerText = student1 + " => trường: " + kc_1 + "; " + student2 + " => trường: " + kc_2 + "; " + student3 + " => trường: " + kc_3;
        document.getElementById("b4-result").innerText = text;

    }
}