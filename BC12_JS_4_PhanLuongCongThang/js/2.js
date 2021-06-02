document.getElementById("hello").onclick = function() {

    var slValue = document.getElementById("thanhvien").value;
    console.log(slValue);
    var hello = document.getElementById("name").innerText;
    document.getElementById("name").style.display = 'block';
    switch (slValue) {
        case "B":
            document.getElementById("name").innerText = "Xin chào Bố";
            break;
        case "M":
            document.getElementById("name").innerText = "Xin chào Mẹ";
            break;
        case "A":
            document.getElementById("name").innerText = "Xin chào Anh trai";
            break;
        case "E":
            document.getElementById("name").innerText = "Xin chào Em gái";
            break;
        default:
            document.getElementById("name").innerText = "Vui lòng chọn thành viên";
            break;

    }

}