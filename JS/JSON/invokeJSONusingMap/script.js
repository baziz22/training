
document.getElementById('addbtn').addEventListener('click',addJSON);
document.getElementById('testbtn').addEventListener('click',tester);
let output = document.getElementById('output');

function tester() {
    console.log('clicked!');
    let tempArray = [4,5,6,7,9,112];
    // using map give us the ability to iterate through all of the values within the array as we built out a brand new array
    const html = tempArray.map(function(val,i){
        return '<li>' +i+ ' = ' + (val * 2) + '</li>';
    })
    console.log(html.join(""));
    output.innerHTML = '<ul>' + html.join("")+ '</ul>'
}

String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}


function addJSON() {

    // set up our fetch object
    // let's fetch the URL
    const url="https://randomuser.me/api/?results=50";
    output.innerHTML = '';
    fetch(url)
    .then(function(response){
        console.log(response.status);
        return response.json();
    }) 
    .then(function(data){
        
        let people = data.results;
        console.log(people);
        
        
        return people.map(function(val,i){
            let div = document.createElement('div');
            let img = document.createElement('img');
            let span = document.createElement('span');
            let firstName = val.name.first.capitalize();
            let lastName = val.name.first.capitalize();
            img.src = val.picture.thumbnail;
            span.innerHTML = (i+1) +'. ' + firstName + ' ' + lastName;
            div.appendChild(span);
            div.appendChild(img);
            console.log(val);
            output.appendChild(div);
        })
    })
    .catch(function(error){
        console.log(error);
    })

}
