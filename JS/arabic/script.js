let x = 10;
let y = 20;

document.getElementById("namy").innerHTML = "Hello Javascript";
if (x + y == 30) {
  console.log("Perfect!");
}

document.getElementById("price").innerHTML = "";

var bader = 50;
var str = "50";

document.write("<br />");

var name = "bader";
function sayHello() {
  var name = "salma";
  console.log("Hello " + name + "!");
  /* alert("Hello World"); */
}

function myInfo(myName) {
  var myName = "Nono";
  myNum = 9;
  return myName;
}
document.getElementById("price").innerHTML = "My number is " + myInfo();


// functions. 
var clik = document.getElementById('inputText');
var cal = document.getElementById('result');
var changeCalc = document.getElementById('chang');
function calculater() {
    var result = clik.value * 3;
    return cal.innerHTML = result;
}


clik.onkeyup = function () {
    changeCalc.innerHTML = clik.value;
};

// array
/*var friends = new Array();

 friends[0] = "Hassan";
friends[1] = "Soha";
friends[2] = "Ahmed";
friends[3] = "Zahra";
friends[4] = "Hind"; */

var friends = new Array("Hassan","Soha","Ahmed","Zahra","Hind");

console.log(friends.length);
friends.length = 3;

console.log(friends.length);
if (friends.constructor === Array){
    console.log('This is array');
}


console.log(friends);

console.log(friends.toString());
console.log(friends.toLocaleString());

var myDate = new Date();

var myString = myDate.toLocaleString();


console.log('myDate: ', myDate);

console.log('myString: ', myString);

console.log('myJoin: ', friends.join("|"));

friends.push('Bader');
console.log(friends);
friends[7] = "Khalid";
friends[8] = "delete"
console.log(friends);
friends.unshift('Nada');
console.log(friends);


/* arrayName.splice (index, How Many, Items, Items2, ...) */

friends.splice(3,2, "Zezo", "Suzan");
console.log(friends);
friends.pop();
console.log(friends);
var lastItem = friends[friends.length - 1];
console.log(lastItem);
friends.shift();
console.log(friends);

