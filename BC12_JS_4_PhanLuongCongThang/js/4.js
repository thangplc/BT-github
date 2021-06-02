document.getElementById("check").onclick = function() {

    var a = document.getElementById("canh1").value;
    var b = document.getElementById("canh2").value;
    var c = document.getElementById("canh3").value;
    // kiểm tra xem ba cạnh có là 1 tam giác hay không
    if (a != "0" && b != "0" && c != "0") {
        if ((a < b + c) || (b < a + c) || (c < a + b)) {

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
    }

    // không là tam giác
    else
        document.getElementById("result-check").innerText = "Đây không là tam giác";

}