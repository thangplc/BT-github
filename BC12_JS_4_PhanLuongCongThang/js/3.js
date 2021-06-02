 document.getElementById("check").onclick = function() {
     var num1 = document.getElementById("num1").value;
     var num2 = document.getElementById("num2").value;
     var num3 = document.getElementById("num3").value;
     //  console.log(num1);
     //  console.log(num2);
     //  console.log(num3);
     //  alert('a');
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

 }