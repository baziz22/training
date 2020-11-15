/*global console, alert, prompt*/

/*
  Regulat Expression Syntax
  /Pattern/Attributes
  Search | Replace | Match | Split | Test
  Attributes List
  [ i ] => Case Insensetive
  [ g ] => Global Search
  [ m ] => Multi Line Search
  Brackets Use
  [...] Character
  [^...] Not Character
  [a-z] Range Small Letters
  [A-Z] Range Capital Letters
  [0-9] Range Numbers
  [^0-9] Not Range
  [A-g] = Range[A-Z] Range[a-g]
  [0-9a-z] Double Range
  Quantifiers
  Letter+ => Word Contains ON Letter
  Letter{Number} => Word Contains Number Of Letters
  Letter{Number, Number} => Word Contains Number Or Number
  Letter{Number,} => Word Contains At Least Number
*/

// Example One

var string = "I Love Elzero 2 Web 8 School 6",
  result = string.replace(/[^0-9]/gi, "@");

console.log(result);

// Example Two

var string = "AB XYZ abc hij",
  result = string.replace(/[A-g]/g, "@");

console.log(result);

// Example Three

var string = "1234567890ABCDEFGHIJKabcdefghijk",
  result = string.replace(/[0-9a-z]/g, "@");

console.log(result);

// Example Four

var string = "1234567890ABCDEFGHIJKabcdefghijk",
  result = string.replace(/[^a-z]/g, "@");

console.log(result);

// Example Five

var string = "1234567890ABCDEFGHIJKabcdefghijk",
  result = string.replace(/[^A-Z]/g, "@");

console.log(result);

// Example Six

var string = "1234567890ABCDEFGHIJKabcdefghijk",
  result = string.replace(/[^0-9]/g, "@");

console.log(result);

// Quantifiers

// Example One

var string = "I Love Elzero Web School",
  result = string.replace(/e+/gi, "@");

console.log(result);

// Example Two

var string = "I Love Elzeeero Web School",
  result = string.replace(/e{3}/gi, "@");

console.log(result);

// Example Three

var string = "I Love Elzeeero Web School",
  result = string.replace(/e{2, 3}/gi, "@");

console.log(result);

// Example Four

var string = "I Love Elzeero Weeeb Schooeeeel",
  result = string.replace(/e{2, 3}/gi, "@");

console.log(result);

// Example Five

var string = "1234567890ABCDEFGHIJKabcdefghijk",
  result = string.replace(/[^A-Z]/g, "@");

console.log(result);

// Example Six

var string = "1234567890ABCDEFGHIJKabcdefghijk",
  result = string.replace(/[^0-9]/g, "@");

console.log(result);
