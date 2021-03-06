/* Bài 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
Tìm ngày, tháng, năm của ngày tiếp theo.Tương tự tìm ngày tháng năm của ngày trước đó.
    INPUT: ngày tháng năm nhập vào(day, month, year)
    HANDLE: 
        Kiểm tra điều kiện hợp lệ input:
            1. Year > 0
            2. Day:
                thuộc [1;31](cho các tháng 1, 3, 5, 7, 8, 10, 12);
                thuộc [1, 30](cho các tháng 4, 6, 9, 11);
                thuôc [1, 28](cho tháng 2, năm không nhuận)
                thuộc [1, 29](cho tháng 2, năm nhuận)
            3. Month: thuộc [1, 12]\
        Nếu không thỏa 3 điều kiền trên{
            yêu cầu nhập lai
        }
        Nếu hợp lệ{
            1.Tính ngày hôm truoc
                day --;
                nếu day =0 
                    month --;
                    nếu month = 0
                        month = 12
                        year--;
                    day = làm theo cách tính ở điều kiện 2
            2. Tính ngày hôm sau
                day ++
                Nếu day > số ngày hợp lệ trong tháng{
                    day =1
                    month ++;
                    Nếu month > 12{
                        month = 1
                        year ++
                    }

                }
        }
    OUTPUT: In ra ngày hôm trước và sau vào thẻ nội dung p
*/
document.getElementById("btn-b1").onclick = function() {
    debugger
    // input
    var day = Number(document.getElementById("b1-day").value);
    var month = Number(document.getElementById("b1-month").value);
    var year = Number(document.getElementById("b1-year").value);
    var ngayHienTai = "Ngày hiện tại: " + day + "/" + month + "/" + year;

    // Kiểm tra năm nhuận
    var namNhuan = false;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        namNhuan = true;
    }

    // Tính số ngày trong tháng nhập vào trong input:
    var dayOfMonth;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayOfMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dayOfMonth = 30;
            break;
        case 2:
            {
                if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
                    dayOfMonth = 29;
                else
                    dayOfMonth = 28;
                break;
            }
    }

    // tạo biến tạm trung gian để tính ngày hôm trước mà không ảnh hưởng tới biến giá trị gốc ban đầu
    var tempDay = day;
    var tempMonth = month;
    var tempYear = year;

    // Kiểm tra ngày tháng năm hợp lệ
    var hopLe = true;
    if (year < 0 || (month < 1 || month > 12) || (day < 1 || day > d) || (year !== parseInt(year) || day !== parseInt(day) || month !== parseInt(month))) {
        hopLe = false;
    }

    if (hopLe == false) {
        alert("(BÀI 1) Nhập sai, yêu cầu nhập lại, tháng thuộc [1, 12], năm > 0, ngày của tháng " + tempMonth + " thuôc [1;" + d + "]");


    } else {
        // Tìm ngày hôm trước

        tempDay--;
        if (tempDay == 0) {
            tempMonth--;
            if (tempMonth == 0) {
                tempMonth = 12;
                tempYear--;
            }
            switch (tempMonth) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    tempDay = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    tempDay = 30;
                    break;
                case 2:
                    {
                        if (namNhuan == true) {
                            tempDay = 29;
                        } else {
                            tempDay = 28;
                        }
                    }
            }
        }

        // Tìm ngày hôm sau
        day++;
        if (day > dayOfMonth) {
            day = 1;
            month++;
            if (month > 12) {
                month = 1;
                year++;
            }
        }
        var ngayHomTruoc = "Ngày hôm trước: " + tempDay + "/" + tempMonth + "/" + tempYear;
        var ngayHomSau = "Ngày hôm sau: " + day + "/" + month + "/" + year;
        document.getElementById("b1-yesterday").style.display = "block";
        document.getElementById("b1-present").style.display = "block";
        document.getElementById("b1-tomorrow").style.display = "block";
        document.getElementById("b1-yesterday").innerText = ngayHomTruoc;
        document.getElementById("b1-present").innerText = ngayHienTai;
        document.getElementById("b1-tomorrow").innerText = ngayHomSau;

    }





}

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
    // Khởi tạo các biến tháng(m), năm(y)
    var m = Number(document.getElementById("month").value);
    var y = Number(document.getElementById("year").value);
    // Khởi tại biến số lượng ngày trong tháng
    var dayOfMonth;
    // Kiểm tra hợp lệ
    if (m == "" || y == "" || m <= 0 || m > 12 || y <= 0 || y !== parseInt(y) || m <= 0 || m !== parseInt(m)) {
        alert("(BÀI2)Nhập sai, tháng thuộc [1, 12], năm >0, số nguyên");
    }
    // Hợp lệ
    else {
        switch (m) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dayOfMonth = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dayOfMonth = 30;
                break;
            case 2:
                {
                    if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0))
                        dayOfMonth = 29;
                    else
                        dayOfMonth = 28;
                    break;
                }
            default:
                alert("Nhập sai, tháng thuộc [1, 12], năm >0, số nguyên");

        }
        document.getElementById("b2-result").innerText = "Tháng " + m + "/" + y + " có " + dayOfMonth + " ngày";
        document.getElementById("b2-result").style.display = 'block';
    }


}

/*Bài3: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
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
                n = n * -1(chuyển thành số dương để vào được switch chạy ra kết quả dương)
            }
            tạo các biến hangChuc, hangDonVi, hangTram
            switch(hangTram){
                case1, 2, 3, 4, 5, 6, 7, 8, 9: read += cách đọc tương ứng(Một trăm, Hai trăm, Ba trăm, ...)
            }
            switch(hangChục){
                case 0, 1, 2, 3, 4, 5, 6, 7, 8, 9: read += cách đọc tương ứng(Lẻ, Mười, Hai, Ba, ....)
            }
            switch(hàng đơn vi){
                case 0, 1, 2, 3, 4, 5, 6, 7, 8, 9: read += cách đọc tương ứng("", Một, Hai, Ba, ....)
            }
            if(hangDonVi && hangChuc == 0){
                switch(hang tram){
                case 1, 2, 3, 4, 5, 6, 7, 8, 9: read = cách đọc tương ứng(Một trăm, Hai trăm, Ba trăm, ...)
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
                if(max = Kc_1 và max != khoảng cách các sinh viên còn lại){
                    sv1 xa trường nhất
                }
                else if( max = kc_2 và max != khoảng cách 2 sinh viên còn lại)){
                    sv2 xa trường nhất
                }
                else if( max = kc_1 = kc_2 và max != kc_3){
                    sv1, sv2 xa trường nhất
                }
                else if(max = kc_1 = kc_3 và max != kc_2){
                    sv1, sv3 xa trường nhất
                }
                 else if(max = kc_3 = kc_2 và max != kc_1){
                    sv2, sv3 xa trường nhất
                }
                else(max = kc_3){
                    sv3 xa trường nhất
                }
            }
        OUTPUT: in ra sinh viên xa trường nhất vào thẻ nội dung p
*/
document.getElementById("btn-b4").onclick = function() {
    debugger
    // Giả sử bản đồ là hệ trục tọa độ xOy
    // Tọa độ sinh viên 1: (x1, y1)
    // Tọa độ sinh viên 2: (x2, y2)
    // Tọa độ sinh viên 3: (x3, y3)
    // Tọa độ trường: (X_SCHOOL, Y_SCHOOL) = (0;0)
    const X_SCHOOL = 0;
    const Y_SCHOOL = 0;
    // Tạo biến text để chứa nội dung thông báo sinh viên nào xa trường nhất
    var text;
    // Tạo các biến đã quy ước ở trên
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;
    var x3 = document.getElementById("x3").value;
    var y3 = document.getElementById("y3").value;
    // DOM thẻ nội dung thông báo
    var student1 = document.getElementById("sv1").value;
    var student2 = document.getElementById("sv2").value;
    var student3 = document.getElementById("sv3").value;
    // DOM thuộc tính style của thẻ nội dung để hiển thị kết quả thông báo
    document.getElementById("b4-result").style.display = 'block';
    document.getElementById("kc").style.display = 'block';
    // Xử lý
    if (x1 == '' || x2 == '' || x3 == '' || y1 == '' || y2 == '' || y3 == '' || x1 != Number(x1) || x2 != Number(x2) || x3 != Number(x3) || y1 != Number(y1) || y2 != Number(y2) || y3 != Number(y3)) {
        alert('Nhập sai ! Yêu cầu nhập số');
    } else {
        var kc_1 = Math.sqrt(Math.pow((X_SCHOOL - x1), 2) + Math.pow((Y_SCHOOL - y1), 2));
        var kc_2 = Math.sqrt(Math.pow((X_SCHOOL - x2), 2) + Math.pow((Y_SCHOOL - y2), 2));
        var kc_3 = Math.sqrt(Math.pow((X_SCHOOL - x3), 2) + Math.pow((Y_SCHOOL - y3), 2));


        // So sánh các khoảng cách(sử dụng toán tử 3 ngôi)
        var max = kc_1 > kc_2 ? (kc_1 > kc_3 ? kc_1 : kc_3) : ((kc_2 > kc_3 ? kc_2 : kc_3));
        // In ra các biến để dễ dang debug
        console.log("kc1: ", kc_1);
        console.log("kc2: ", kc_2);
        console.log("kc3: ", kc_3);
        console.log("max", max);
        switch (max) {
            case (max == kc_1 && max != kc_2 && max != kc_3):
                {
                    text = student1 + " xa trường nhất";
                    break;
                }
            case (max == kc_2 && max != kc_1 && max != kc_3):
                {
                    text = student2 + " xa trường nhất";
                    break;
                }
            case (max == kc_1 && max == kc_2 && max != kc_3):
                {
                    text = student1 + " và " + student2 + " xa trường nhất";
                    break;
                }
            case (max == kc_2 && max == kc_3 && max != kc_1):
                {
                    text = student2 + " và " + student3 + " xa trường nhất";
                    break;
                }
            case (max == kc_3 && max == kc_1 && max != kc_2):
                {
                    text = student1 + " và " + student3 + " xa trường nhất";
                    break;
                }
            default:
                {
                    text = student3 + " xa trường nhất";
                    break;
                }

        }
        // Xét điều kiện kiểm tra sinh viên nào xa trường nhất?
        // if (max == kc_1 && max != kc_2 && max != kc_3) {
        //     text = student1 + " xa trường nhất";
        // } else if (max == kc_2 && max != kc_1 && max != kc_3) {
        //     text = student2 + " xa trường nhất";
        // } else if (max == kc_1 && max == kc_2 && max != kc_3) {
        //     text = student1 + " và " + student2 + " xa trường nhất";
        // } else if (max == kc_2 && max == kc_3 && max != kc_1) {
        //     text = student2 + " và " + student3 + " xa trường nhất";
        // } else if (max == kc_3 && max == kc_1 && max != kc_2) {
        //     text = student1 + " và " + student3 + " xa trường nhất";
        // } else {
        //     text = student3 + " xa trường nhất";

        // }
        // In ra kết quả
        document.getElementById("kc").innerText = student1 + " => trường: " + kc_1 + "; " + student2 + " => trường: " + kc_2 + "; " + student3 + " => trường: " + kc_3;
        document.getElementById("b4-result").innerText = text;

    }
}