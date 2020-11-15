// make any array of objects

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
// convert to JSON
person = JSON.stringify(person);
console.log(person);
// parse it back into an object
person = JSON.parse(person);
console.log(person);

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
  
  // Sending an XMLHttpRequest
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         //document.getElementById("demo").innerHTML = xhttp.responseText;
         //console.log(xhttp.responseText);
         let response = JSON.parse(xhttp.responseText);
         //console.log(response.people);
         for(let i=0; i<response.people.length; i++){
    
          console.log(people[i].name);
        
         }
      }
  };
  xhttp.open("GET", "people.json", true);
  xhttp.send();