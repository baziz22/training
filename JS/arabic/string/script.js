'use strict'

/*
  Split: split( Separator, Limit )
  Slice: slice( Start [Required], End [Optional] )
  Substr: substr( Start [Required], Length [Optional] )
  Substring: substring( Start [Required], End [Optional] )
*/

// Split First Example

let myString = "  I love Java \"and\" PHP and Javascript  ";
    // Split Second Example
    let mySplit = myString.split(" ",4);
    //mySplit = myString.split("-", 2);
    // Slice
    let mySlice = myString.slice(9, 17);
    // Substr
    let mySubStr = myString.substr(9, 3);
    // Substring
    let mySubString = myString.substring(21, 9);
    // Search
    let mySearch = myString.search("P");
    //trim
    let mytrim = myString.trim();
    //charAt
    let mycharAt = myString.charAt('7');
    //replace              //g:global i:insensitive
    let myReplace = myString.replace("/l/gi", "X");

console.log(myString);

console.log(typeof mySearch);

console.log(mytrim);

console.log(typeof mytrim);

//---------------------------------

let utf = String.fromCharCode(1664, 1674, 1683);
console.log(utf);

