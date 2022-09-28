// import React from "react";

// const GradingSystem = () => {
//   function Total() {
//     var sub1 = parseInt(document.getElementById("eng").value);
//     var sub2 = parseInt(document.getElementById("mat").value);
//     var sub3 = parseInt(document.getElementById("phy").value);
//     var sub4 = parseInt(document.getElementById("comp").value);
//     var sub5 = parseInt(document.getElementById("sci").value);

//     if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
//       alert("Please Enter mark in range of 100");
//     } else {
//       var total = sub1 + sub2 + sub3 + sub4 + sub5;
//       document.getElementById("total").innerHTML =
//         "English Marks : " +
//         sub1 +
//         "<br> Mathmarks" +
//         sub2 +
//         "<br> Physics" +
//         sub3 +
//         "<br> Mathmarks" +
//         sub4 +
//         "<br> Computer" +
//         sub2 +
//         "<br> Science";
//     }

//     const Average = () => {
//         var sub1 = parseInt(document.getElementById("eng").value);
//         var sub2 = parseInt(document.getElementById("mat").value);
//         var sub3 = parseInt(document.getElementById("phy").value);
//         var sub4 = parseInt(document.getElementById("comp").value);
//         var sub5 = parseInt(document.getElementById("sci").value);
    

//         if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
//             alert("Please Enter mark in range of 100");
//           } else {
//             var total = sub1 + sub2 + sub3 + sub4 + sub5;
//              var Ave =  total/5
//              document.getElementById("average").innerHTML = "your average Marks :"+ Ave
//           }
//     }


//     function Grade(){
//         var sub1 = parseInt(document.getElementById("eng").value);
//         var sub2 = parseInt(document.getElementById("mat").value);
//         var sub3 = parseInt(document.getElementById("phy").value);
//         var sub4 = parseInt(document.getElementById("comp").value);
//         var sub5 = parseInt(document.getElementById("sci").value);
    

//         if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
//             alert("Please Enter mark in range of 100");
//           } else {
//             var total = sub1 + sub2 + sub3 + sub4 + sub5;
//              var Ave =  total/5

//              if(Ave >= 80 && Ave<=100){
//                 document.getElementById("grade").innerHTML = "your grade A"
//              }
//              else if(Ave >= 75 && Ave<=80){
//                 document.getElementById("grade").innerHTML = "your grade B+"
//              }
//              else if(Ave >= 70 && Ave<=75){
//                 document.getElementById("grade").innerHTML = "your grade B"
//              }
//              else if(Ave >= 65 && Ave<=70){
//                 document.getElementById("grade").innerHTML = "your grade C+"
//              }
//              else if(Ave >= 60 && Ave<=65){
//                 document.getElementById("grade").innerHTML = "your grade C"
//              }
//              else if(Ave >= 50 && Ave<=60){
//                 document.getElementById("grade").innerHTML = "your grade D"
//              }
//              else{
//                 document.getElementById("grade").innerHTML = "your grade F"

//              }
            
//           }
//     }
//   }

//   return (
//     <>
//       <div id="main">
//         <div id="head">
//           <h2>Grading System</h2>
//           <label>English</label>
//           <input type="text" id="eng" />
//           <br />
//           <label>Maths</label>
//           <input type="text" id="mat" />
//           <br />
//           <label>Physics</label>
//           <input type="text" id="phy" />
//           <br />
//           <label>Computer</label>
//           <input type="text" id="comp" />
//           <br />
//           <label>Science</label>
//           <input type="text" id="sci" />
//           <br />
//           <button onClick={Total}>Total</button>
//           <button onClick={Average}>Average</button>
//           <button onClick={Grade}>Grade</button>
//         </div>
//       </div>
//       <div id="result">
//         <div id="head1">
//           <h1>Total</h1>
//         </div>
//         <div id="total"></div>

//         <div id="head2">
//           <h1>Average</h1>
//         </div>
//         <div id="average"></div>

//         <div id="head3">
//           <h1>Grade</h1>
//         </div>
//         <div id="grade"></div>
//       </div>
//     </>
//   );
// };

// export default GradingSystem;
