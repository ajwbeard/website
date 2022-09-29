const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('website development in progress');
});

// var collapseButton1 = "<button id='collapse-btn1' class='expand-collapse'><img src='Images/collapse.png' /></button>";
// var expandButton1 = "<button id='expand-btn1' class='expand-collapse'><img src='Images/expand.png' /></button>";
// const resume = "<img class='resume' src='Files/resume.png'/>";

// var collapseButton2 = "<button id='collapse-btn2' class='expand-collapse'><img src='Images/collapse.png' /></button>";
// var expandButton2 = "<button id='expand-btn2' class='expand-collapse'><img src='Images/expand.png' /></button>";
// const postmastr = `
//   <img class='resume' src='Images/postmastr-title.png' />
//   <img class='resume' src='Images/postmastr-intro.png' />
//   <img class='resume' src='Images/postmastr-solution.png' />
//   <img class='resume' src='Images/postmastr-frontend.png' />
//   <h2>Screens I made:</h2>
//   <img class='resume' src='Images/postmastr-login-signup.png' />
//   <img class='resume' src='Images/postmastr-scanned-packages.png' />
//   <img class='resume' src='Images/postmastr-scanned-packages3.png' />
//   <img class='resume' src='Images/postmastr-scanned-packages1.png' />
//   <img class='resume' src='Images/postmastr-scanned-packages2.png' />
//   `;

// window.onload = function() {
//   document.getElementById('resume').innerHTML = collapseButton1;
//   document.getElementById('resume').innerHTML += resume;
//   $("#collapse-btn1").on('click', function() {
//     collapse('resume', "expand-btn1", 'collapse-btn1', expandButton1, collapseButton1, resume);
//   });

//   document.getElementById('postmastr').innerHTML = collapseButton2;
//   document.getElementById('postmastr').innerHTML += postmastr;
//   $("#collapse-btn2").on('click', function() {
//     collapse('postmastr', "expand-btn2", 'collapse-btn2', expandButton2, collapseButton2, postmastr);
//   });
// };

// //elementId is a string, the name of the element that is going to be expanded
// //contents is the HTML to be added into the element
// //btn is the collapse button
// //btnId is the ID of the collapse button located in the element
// function expand(elementId, btnExpId, btnCollId, btnExp, btnColl, contents) {
//   document.getElementById(elementId).innerHTML = btnColl;
//   document.getElementById(elementId).innerHTML += contents;
//   $("#" + btnCollId).click(function() {
//     collapse(elementId, btnExpId, btnCollId, btnExp, btnColl, contents);
//   });
// }

// //elementId is a string, name of element that is going to be collapsed
// //btn is the expand button
// //btnId is the ID of the expand button located in the element
// function collapse(elementId, btnExpId, btnCollId, btnExp, btnColl, contents) {
//   document.getElementById(elementId).innerHTML = btnExp;
//   $("#" + btnExpId).click(function() {
//     expand(elementId, btnExpId, btnCollId, btnExp, btnColl, contents);
//   });
// }
