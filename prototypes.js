console.log("source is good!");

var dogQuote = "Woof! woof! grrr...";

// Object.getPrototypeOf(dogQuote);
// Listing all of the prototype's methods and properties
console.log(Object.getPrototypeOf(dogQuote));

// Logging string length using the prototype's length property
console.log(dogQuote.length);

// Logging the string's length using the prototype's toUpperCase() method
console.log(dogQuote.toUpperCase());

// An object with two properties and no methods
var dogHouse = {
  location: "backyard",
  heightInFeet: 2
};

// Adding a property to the dogHouse object using dot notation
dogHouse.color = "red";

console.log(dogHouse);

// Adding a new method to the string prototype
String.prototype.whatAreYou = function(){
  console.log('I am a striiiing! :)');
};

var song = "Happy Birthday";

song.whatAreYou();
