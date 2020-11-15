

/*global console*/

/*
    [1] - document.getElementByID();
    [2] - document.getElementsByTagName();
    [3] - document.getElementsByClassName();
    [4] - document.querySelectorAll();
    [5] - document.title;

*/
 let myElement = document.getElementById('divy');
//console.log(myElement.length);
myElement.innerHTML = document.title +"<br>";
for(let i = 0; i < document.images.length; i++){
    document.write(document.images[i].src+" ");
}
let myP = document.createElement('p');
myPText = document.createTextNode('This Paragraph Created with Javascript');
myP.appendChild(myPText);
document.body.appendChild(myP);