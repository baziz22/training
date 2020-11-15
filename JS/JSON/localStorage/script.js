document.getElementById('addbtn').addEventListener('click',addToStorage);
document.getElementById('seebtn').addEventListener('click',viewStorage);


function addToStorage() {
    let tempFirst = document.getElementById('first_name').value;
    let tempLast = document.getElementById('last_name').value;
    let myObj = JSON.stringify({name:tempFirst,last:tempLast});
    localStorage.setItem('tester',myObj);
}

function viewStorage() {
    let tempHolder = localStorage.getItem('tester');
    console.log(tempHolder);
    //document.write(tempHolder);
}

document.getElementById('getjson').addEventListener('click',getInfo);
let output = document.getElementById('output');

function getInfo(){
    console.log('Working');
    
    // set up our fetch object
    // let's fetch the URL
    const url="https://my-json-server.typicode.com/typicode/demo/posts";
    fetch(url)
    .then(function(response){
        console.log(response.status);
        return response.json();
    }) 
    .then(function(data){
        console.log(data);
        for(let i in data){
            output.innerHTML += "ID: " + data[i].id + " " + "Title: " +data[i].title +"<br>"; 
        }
    })

}
