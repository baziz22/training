/* jslint pluplus: true, evil: true */
//"use strict";

document.write('<div id="former">');
document.write('<input type="text" id="starter" value="star">' + "<br>");
document.write('<input type="text" id="ender">' + "<br>");
document.write(
  '<button id="btn" type="submit" onclick="generateYears(starters,enders)">Generate</button>'
);
document.write("</div>");
document.write('<div id="added"></div>');
let inputs = document.querySelectorAll("input");
function clear() {
  inputs.forEach((input) => (input.value = ""));
}
let starters = document.getElementById("starter");
let enders = document.getElementById("ender");

function generateYears(start, end) {
  let years,
    option = "<select>";

  for (years = start.value; years <= end.value; years++) {
    option += '<option value="' + years + '">' + years + "</option>";
  }
  option += "</select>";

  document.getElementById("added").innerHTML += option;
  clear();
}
/* document.querySelector("btn").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    starters.reset();
  },
  false
); */

//----another form------
let btn = document.getElementById("button"),
  startInput = document.getElementById("start"),
  endInput = document.getElementById("end"),
  option;

btn.onclick = function () {
  "use strict";
  option = "<select>";
  let years;
  for (years = startInput.value; years <= endInput.value; years++) {
    option += "<option>" + years + "</option>";
  }
  option += "</select>";
  document.getElementById("result").innerHTML = option;
};

//-----------------------------------------------
let y;
for (y = 2000; y <= 2500; y++) {
  let optn = document.createElement("OPTION");
  optn.text = y;
  optn.value = y;

  // if year is 2015 selected
  if (y == 2015) {
    optn.selected = true;
  }

  document.getElementById("year").options.add(optn);
}
let m;
let d = new Date();
let monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
for (m = 0; m <= 11; m++) {
  let optn = document.createElement("OPTION");
  optn.text = monthArray[m];
  // server side month start from one
  optn.value = m + 1;

  // if june selected
  if (m == 5) {
    optn.selected = true;
  }

  document.getElementById("month").options.add(optn);
}
