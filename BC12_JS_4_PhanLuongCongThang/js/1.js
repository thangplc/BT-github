 document.getElementById("sort").onclick = function() {
     var temp;
     var a = document.getElementById("numOne").value;
     var b = document.getElementById("numTwo").value;
     var c = document.getElementById("numThree").value;
     console.log(a);
     console.log(b);
     console.log(c);

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