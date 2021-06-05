// Input: 3 cạnh nhập vào: canh1, canh2, canh3
/* Handle
    if(Nếu input rỗng)
         yêu câu nhập lại
    else if(Nếu input không phải số(nhận cả số int và float))
         yêu cầu nhập lại
    else{Trường hợp con lại: bắt đầu xử lý)
    
        if(1. Nếu người dùng nhập vào số 0 vào 1/3 input) 
            Không là tam giác
        else(2. Nếu người dùng nhập vào hợp lệ)
            2.1 if(1 cạnh < tông 2 cạnh còn lại)
                2.1.1: Tam giác cân: có 2 cạnh bằng nhau
                2.1.2 Tam giác đều: có 3 cạnh bằng nhau
                2.1.3 Tam giác vuông: bình phương 1 cạnh = tổng bình phương 2 cạnh còn lại
                2.1.4 Tam giac tù: bình phương 1 cạnh > tổng bình phương 2 cạnh còn lại
                2.1.5 Tam giác vuông cân: 2 cạnh bằng nhau và có 1 cạnh khác với cạnh còn lại và thỏa điều kiện: bình phương cạnh còn lại = 2 lần bình phương cạnh cạnh cân
                2.1.6 Tam giác nhon: Trường hợp còn lại
            2.2 else 
                Không là tam giác
*/
// Output: in ra lại tam giác
document.getElementById("check").onclick = function() {

    var a = (document.getElementById("canh1").value);
    var b = (document.getElementById("canh2").value);
    var c = (document.getElementById("canh3").value);
    if (a == '' || b == '' || c == '') {
        alert('Vui long nhap lieu');
    } else if (a != Number(a) || b != Number(b) || c != Number(c)) {
        alert('Nhập dữ liệu input không hợp lệ! Yêu cầu nhập số');
    } else {
        // kiểm tra xem ba cạnh có là 1 tam giác hay không
        if (a !== "0" && b !== "0" && c !== "0") {
            if ((a < b + c) && (b < a + c) && (c < a + b)) {

                // tam giác vuông theo định lý pytago(bình phương 1 cạnh = tổng bình phương 2 cạnh còn lại)
                if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b))
                    document.getElementById("result-check").innerText = "Đây là tam giác VUÔNG";

                // tam giác đều: 3 cạnh = nhau
                else if (a == b && b == c)
                    document.getElementById("result-check").innerText = "Đây là tam giác ĐỀU";

                // tam giác cân: 2 cạn bằng nhau
                else if (a == b || a == c || b == c)
                    document.getElementById("result-check").innerText = "Đây là tam giác CÂN";

                //tam gíac tù: có 1 góc > 90 độ
                else if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b)
                    document.getElementById("result-check").innerText = "Đây là tam giác TÙ";

                // tam giác vuông cân: 2 cạnh bằng nhau và cân tại góc vuông
                else if ((a == b && b != c && 2 * a * a == c * c) ||
                    (b == c && c != a && 2 * b * b == a * a) ||
                    (a == c && c != b && 2 * c * c == b * b)) {
                    document.getElementById("result-check").innerText = "Đây là tam giác VUÔNG CÂN";
                }

                // tam giác nhọn: trường hợp còn lại
                else
                    document.getElementById("result-check").innerText = "Đây là tam giác NHỌN";
            }
            // không là tam giác
            else
                document.getElementById("result-check").innerText = "Đây không là tam giác";
        }


    }


}