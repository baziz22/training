'use strict'

/*
  Split: split( Separator, Limit )
  Slice: slice( Start [Required], End [Optional] )
  Substr: substr( Start [Required], Length [Optional] )
  Substring: substring( Start [Required], End [Optional] )
*/

// Split First Example

let myMainString = "I love Java and PHP and Javascript";
    // Split Second Example
    let mySplittedString = myMainString.split(" ", 4);
    mySplittedString = myMainString.split("-", 2);
    // Slice
    let mySlicedString = myMainString.slice(7, 17);
    // Substr
    let mySubStr = myMainString.substr(7, 1);
    // Substring
    let mySubString = myMainString.substring(19, 7);

console.log(myMainString);

console.log(typeof myMainString);

console.log(mySplittedString);

console.log(typeof mySplittedString);

//---------------------------------

let utf = String.fromCharCode(1664, 1674, 1683);
console.log(utf);

