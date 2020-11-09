// activate strict mode for the entire script
// make it easy for us to write a secure JS code.
'use strict'
// Start of Functions Topics
// start -------------------------------------------------------
function logger(){
    console.log('Bader Binsunbil');
}
// calling running invoking function
logger();
// end ---------------------------------------------------------

{// function calls other function
    //declare the parameters or pass in the parameters
const cutPieces = function(fruit) {
    return fruit * 4;
}
function fruitprocessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
const appleJuice = fruitprocessor(4,7);
console.log(appleJuice);
//pass in the arguemnt.
console.log(fruitprocessor(4,7));
}// end ---------------------------------------------------------


// start -------------------------------------------------------
//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);
// end ---------------------------------------------------------

// start -------------------------------------------------------
//function expression
const calcAge2 = function (birthYear) {
    return 2030 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
// end ---------------------------------------------------------

// start -------------------------------------------------------
// Arrow Function ⬇︎ doesn't accept "this keyword"
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
// end ---------------------------------------------------------

// start -------------------------------------------------------
// Arrow Function with more than parameter ⬇︎ doesn't accept "this keyword"
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    /* return retirement; */
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
// end ---------------------------------------------------------
//End of Functions Topics

// Start of Array Topics