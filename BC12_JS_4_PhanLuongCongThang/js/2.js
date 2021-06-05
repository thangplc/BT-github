// input: value của selector (B, M, A, E): slValue
/*Handle
    switch(slValue)
        case1: slValue = B set innerText của thẻ có nội dung xin chào là 'Xin chào bố'
        case2: slValue = M set innerText của thẻ có nội dung xin chào là 'Xin chào mẹ'
        case3: slValue = A set innerText của thẻ có nội dung xin chào là 'Xin chào anh trai'
        case4: slValue = E set innerText của thẻ có nội dung xin chào là 'Xin chào em gái'
        case default: set innerText của thẻ có nội dung xin chào là "Vui lòng chọn thành viên"
 */
// output: thẻ p có nội dụng là xin chào(thành viên)
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