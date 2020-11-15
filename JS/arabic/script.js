'use strict'
let x = 10;
let y = 20;

document.getElementById("namy").innerHTML = "Hello Javascript";

document.write("<br />");

var name = "bader";
function sayHello() {
  var name = "salma";
  console.log("Hello " + name + "!");
  /* alert("Hello World"); */
}

function myInfo(myName) {
  var myName = "Nono";
  var myNum = 9;
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

var friends = []; // Literal Way
friends[0] = "Hassan";
friends[1] = "Soha";
friends[2] = "Ahmed";
friends[3] = "Zahra";
friends[4] = "Hind";

/* var friends = new Array(
  "Hassan",
  "Soha",
  "Ahmed",
  "Zahra",
  "Hind"); */

console.log(friends.length);
friends.length = 3;

//check if this is array or not ⬇︎.
console.log(friends.length);
if (friends.constructor === Array){
    console.log('This is a constructor array');
}

console.log(friends.toString());
console.log(friends.toLocaleString());

var myDate = new Date();

var localString = myDate.toLocaleString();


console.log('myDate: ', myDate);

console.log('toLocalString: ', localString);

console.log('Using Join: ', friends.join("|"));



/* arrayName.splice (index, How Many, Items, Items2, ...) */

friends.splice(3,2, "Zezo", "Suzan");
console.log(friends);
friends.pop();
console.log(friends);
var lastItem = friends[friends.length - 1];
console.log(lastItem);
friends.shift();
console.log(friends);

friends.push('Bader');
console.log(friends);
friends[7] = "Khalid";
friends[8] = "delete";
console.log(friends);
friends.unshift('Nada');
console.log(friends);

var mySlicedArray = friends.slice(-4,-1);
console.log(mySlicedArray);
var newFriends = [
  "Amani",
  "Waad",
  "Sarah"
]
var allFriends = friends.concat(newFriends);
console.log("all friends: "+allFriends);

friends.splice(6,1);
console.log(friends);
friends.splice(6,0, "Salman", "Huda");
console.log(friends);
// Search Elements
var specialFriends = friends.indexOf("Bader");
console.log(specialFriends);
            // indexOf(Value, Start Index ⬇︎)
specialFriends = friends.indexOf("Bader", 5);
console.log(specialFriends);
specialFriends = friends.lastIndexOf("Bader", -1);
console.log(specialFriends);

document.getElementById("myFriends").innerHTML = allFriends.join(" | ");
document.getElementById("specialFriends").innerHTML = 
"<span style='color:#F00'>" + friends[specialFriends] + "</span>";


//make an object
let person = {
    name: "Bader",
    lname: "Binsunbil",
    email: function(){
        return "baziz22@gmail.com";
    },
    address:{
      street: "5 main st",
      city: "Boston"
    },
    children:["Brianna","Nicholas"]
}
console.log(person);
// access 
console.log(person.name,person.email(), person.address.street,person.children[0]);


// make any array of objects
let people = [
  {
    name:"Brad",
    salary: 5000
  },
  {
    name:"John",
    salary: 15000
  },
  {
    name:"Bader",
    salary: 25000
  }
]
console.log(people[2].salary);

let output = '';
for(let i=0; i<people.length; i++){
  
  output += "<li>"+people[i].name+"</li>";

}
document.getElementById('people').innerHTML = output;
