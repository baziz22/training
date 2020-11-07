// Cat object
var myCat = {
  name: "Meowsalot",
  species: "cat",
  favFood: "tuna"
};

myCat.favFood;

// Color Array
var myFavColors = ["blue", "green", "purple"];

//myFavColors[2];

// JSON: Object and Array nested inside each other.
// JSON is a popular and agreed-upon format for sending and receiving and storing data.
// JSON: stands for Java Script Object Notation.
// JSON has replaced XML. XML is data format that's is very similar to JSON.
var thePets = [
  {
    name: "Meowsalot",
    species: "cat",
    favFood: "tuna"
  },
  {
    name: "Barky",
    species: "dog",
    favFood: "carrots"
  }
];

//thePets.favFood[1];

// AJAX: the process of sending or receiving data on the fly without a page reload
// AJAX: stand for:
// A: Asynchronuos
// J: Javascript
// A: And
// X: XML - J:JSON
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", function() {
  //setting this variable to equal a new instance of the XMLHttpRequest tool. ↓
  // We are technically using this tool to go out and download JSON or XML data.
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      pageCounter +
      ".json"
  );
  // Setting to anonymous function.
  ourRequest.onload = function() {
    //console.log(ourRequest.responseText);
    if (ourRequest.status >= 200 && ourRequest.status < 400){
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    }else {
      console.log("We connected to the server, but it returned an error.");
    }
    
    //console.log(ourData[0]);
  };
  // Error handling
  ourRequest.onerror = function() {
    console.log("Connection error");
  }

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    console.log("Done!");
    btn.classList.add("hide-me");
    //mybtn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat";
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      }else{
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }
    htmlString += '.</p>';
    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      }else{
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }
  }
  htmlString += ' and dislikes ';
  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
